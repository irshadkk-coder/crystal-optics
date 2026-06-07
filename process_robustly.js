import fs from 'fs';
import path from 'path';
import jpeg from 'jpeg-js';
import { PNG } from 'pngjs';

const __dirname = path.resolve();

const assetsToProcess = [
  {
    input: '/src/assets/images/crystal_one_1780560392672.png',
    output: '/public/frames/crystal-one.png'
  },
  {
    input: '/src/assets/images/aero_titanium_x_1780562406111.png',
    output: '/public/frames/aero-titanium-x.png'
  },
  {
    input: '/src/assets/images/helix_gold_1780560415677.png',
    output: '/public/frames/helix-gold.png'
  },
  {
    input: '/src/assets/images/void_silver_1780560448288.png',
    output: '/public/frames/void-silver.png'
  },
  {
    input: '/src/assets/images/amber_ridge_1780560433159.png',
    output: '/public/frames/amber-ridge.png'
  }
];

const publicFramesDir = path.join(__dirname, 'public', 'frames');
if (!fs.existsSync(publicFramesDir)) {
  fs.mkdirSync(publicFramesDir, { recursive: true });
}

function processAsset({ input, output }) {
  return new Promise((resolve, reject) => {
    const inputPath = path.join(__dirname, input);
    const outputPath = path.join(__dirname, output);

    if (!fs.existsSync(inputPath)) {
      console.error(`Input file not found: ${inputPath}`);
      return resolve();
    }

    try {
      const jpegData = fs.readFileSync(inputPath);
      const rawImageData = jpeg.decode(jpegData);
      const width = rawImageData.width;
      const height = rawImageData.height;

      console.log(`\n-----------------------------------------------`);
      console.log(`Processing with dual-pass: ${path.basename(inputPath)} (${width}x${height})`);

      // PASS 1: Candidate classification
      const pixelIsFrameCandidate = new Uint8Array(width * height);
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = y * width + x;
          const start = idx * 4;
          const r = rawImageData.data[start];
          const g = rawImageData.data[start + 1];
          const b = rawImageData.data[start + 2];
          const maxVal = Math.max(r, g, b);
          if (maxVal >= 12) {
            pixelIsFrameCandidate[idx] = 1;
          }
        }
      }

      // BFS with strict 4-connectivity
      let visited = new Uint8Array(width * height);
      let components = [];

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = y * width + x;
          if (pixelIsFrameCandidate[idx] && !visited[idx]) {
            const clusterPixels = [];
            const queue = [idx];
            visited[idx] = 1;

            while (queue.length > 0) {
              const currIdx = queue.shift();
              const currY = Math.floor(currIdx / width);
              const currX = currIdx % width;
              clusterPixels.push(currIdx);

              const neighbors = [
                { nx: currX + 1, ny: currY },
                { nx: currX - 1, ny: currY },
                { nx: currX, ny: currY + 1 },
                { nx: currX, ny: currY - 1 }
              ];

              for (const { nx, ny } of neighbors) {
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                  const nIdx = ny * width + nx;
                  if (pixelIsFrameCandidate[nIdx] && !visited[nIdx]) {
                    visited[nIdx] = 1;
                    queue.push(nIdx);
                  }
                }
              }
            }

            components.push({ pixels: clusterPixels });
          }
        }
      }

      if (components.length === 0) {
        console.warn(`⚠️ Warning: No frame candidates found in ${input}`);
        return resolve();
      }

      // Keep only largest candidate
      components.sort((a, b) => b.pixels.length - a.pixels.length);
      const largestComponent = components[0];
      const largestComponentSet = new Uint8Array(width * height);
      largestComponent.pixels.forEach(idx => {
        largestComponentSet[idx] = 1;
      });

      // Construct intermediate buffer
      const tempAlpha = new Uint8Array(width * height);
      for (let idx = 0; idx < width * height; idx++) {
        if (largestComponentSet[idx]) {
          const inIdx = idx * 4;
          const r = rawImageData.data[inIdx];
          const g = rawImageData.data[inIdx + 1];
          const b = rawImageData.data[inIdx + 2];
          const maxVal = Math.max(r, g, b);

          if (maxVal < 14) {
            const ratio = (maxVal - 12) / (14 - 12);
            tempAlpha[idx] = Math.round(ratio * 255);
          } else {
            tempAlpha[idx] = 255;
          }
        } else {
          tempAlpha[idx] = 0;
        }
      }

      // PASS 2: Explicit alpha-connectivity isolation (perfect mirroring of analyze_frames validator)
      visited.fill(0);
      const alphaComponents = [];

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = y * width + x;
          if (tempAlpha[idx] > 50 && !visited[idx]) {
            const clusterPixels = [];
            const queue = [idx];
            visited[idx] = 1;

            while (queue.length > 0) {
              const currIdx = queue.shift();
              const currY = Math.floor(currIdx / width);
              const currX = currIdx % width;
              clusterPixels.push(currIdx);

              const neighbors = [
                { nx: currX + 1, ny: currY },
                { nx: currX - 1, ny: currY },
                { nx: currX, ny: currY + 1 },
                { nx: currX, ny: currY - 1 }
              ];

              for (const { nx, ny } of neighbors) {
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                  const nIdx = ny * width + nx;
                  if (tempAlpha[nIdx] > 50 && !visited[nIdx]) {
                    visited[nIdx] = 1;
                    queue.push(nIdx);
                  }
                }
              }
            }

            // Consider significant blocks
            if (clusterPixels.length > 600) {
              alphaComponents.push({ pixels: clusterPixels });
            }
          }
        }
      }

      // If we have multiple significant components, zero out all but the single largest
      const finalOpaqueSet = new Uint8Array(width * height);
      if (alphaComponents.length > 0) {
        alphaComponents.sort((a, b) => b.pixels.length - a.pixels.length);
        const bestAlphaComp = alphaComponents[0];
        bestAlphaComp.pixels.forEach(idx => {
          finalOpaqueSet[idx] = 1;
        });
        console.log(`PASS 2: Isolated pristine component with ${bestAlphaComp.pixels.length} active pixels. Removed ${alphaComponents.length - 1} secondary components.`);
      } else {
        console.log(`PASS 2: No significant alpha components found.`);
      }

      // Write final perfect image output
      const png = new PNG({ width, height });
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = y * width + x;
          const outIdx = idx * 4;

          if (finalOpaqueSet[idx]) {
            const inIdx = idx * 4;
            png.data[outIdx] = rawImageData.data[inIdx];
            png.data[outIdx + 1] = rawImageData.data[inIdx + 1];
            png.data[outIdx + 2] = rawImageData.data[inIdx + 2];
            png.data[outIdx + 3] = tempAlpha[idx];
          } else {
            png.data[outIdx] = 0;
            png.data[outIdx + 1] = 0;
            png.data[outIdx + 2] = 0;
            png.data[outIdx + 3] = 0;
          }
        }
      }

      const writeStream = fs.createWriteStream(outputPath);
      png.pack().pipe(writeStream);

      writeStream.on('finish', () => {
        console.log(`✅ Success: dual-pass processed and flushed to disk: ${outputPath}`);
        resolve();
      });

      writeStream.on('error', (err) => {
        console.error(`Error writing PNG:`, err);
        reject(err);
      });

    } catch (err) {
      console.error(`Error processing file ${input}:`, err);
      reject(err);
    }
  });
}

async function runAll() {
  for (const asset of assetsToProcess) {
    await processAsset(asset);
  }
  console.log(`\n🎉 DUAL-PASS ISOLATION COMPLETE.`);
}

runAll();
