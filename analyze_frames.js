import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';

const __dirname = path.resolve();
const framesDir = path.join(__dirname, 'public', 'frames');

const files = [
  'crystal-one.png',
  'aero-titanium-x.png',
  'helix-gold.png',
  'amber-ridge.png',
  'void-silver.png'
];

async function analyzeFile(filename) {
  const filePath = path.join(framesDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`[Analysis] File not found: ${filename}`);
    return;
  }

  return new Promise((resolve) => {
    fs.createReadStream(filePath)
      .pipe(new PNG())
      .on('parsed', function() {
        const width = this.width;
        const height = this.height;
        const data = this.data;

        // Map representing visited pixels
        const visited = new Uint8Array(width * height);
        const clusters = [];

        // BFS to find connected components of non-transparent pixels
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const idx = y * width + x;
            const pixelStart = idx << 2;
            const alpha = data[pixelStart + 3];

            // If it is non-transparent and not visited
            if (alpha > 50 && !visited[idx]) {
              // Start a new cluster
              const clusterPixels = [];
              const queue = [idx];
              visited[idx] = 1;

              let minX = x, maxX = x, minY = y, maxY = y;

              while (queue.length > 0) {
                const currIdx = queue.shift();
                const currY = Math.floor(currIdx / width);
                const currX = currIdx % width;
                
                clusterPixels.push(currIdx);

                if (currX < minX) minX = currX;
                if (currX > maxX) maxX = currX;
                if (currY < minY) minY = currY;
                if (currY > maxY) maxY = currY;

                // 4-connectivity
                const neighbors = [
                  { nx: currX + 1, ny: currY },
                  { nx: currX - 1, ny: currY },
                  { nx: currX, ny: currY + 1 },
                  { nx: currX, ny: currY - 1 }
                ];

                for (const { nx, ny } of neighbors) {
                  if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    const nIdx = ny * width + nx;
                    const nAlpha = data[(nIdx << 2) + 3];
                    if (nAlpha > 50 && !visited[nIdx]) {
                      visited[nIdx] = 1;
                      queue.push(nIdx);
                    }
                  }
                }
              }

              // Ignore tiny noise components (less than 600 pixels)
              if (clusterPixels.length > 600) {
                clusters.push({
                  size: clusterPixels.length,
                  boundingBox: { minX, maxX, minY, maxY },
                  width: maxX - minX + 1,
                  height: maxY - minY + 1
                });
              }
            }
          }
        }

        console.log(`\n==============================================`);
        console.log(`ASSET ANALYSIS FOR: ${filename} (${width}x${height})`);
        console.log(`Found ${clusters.length} significant disconnected components (size > 600 px):`);
        clusters.forEach((c, index) => {
          console.log(`Cluster #${index + 1}: Size = ${c.size} px, Bounding Box = [X: ${c.boundingBox.minX} to ${c.boundingBox.maxX}, Y: ${c.boundingBox.minY} to ${c.boundingBox.maxY}], Dimensions = ${c.width}x${c.height}`);
        });

        if (clusters.length > 1) {
          console.log(`🚨 REJECTED: Contains ${clusters.length} separate elements! Needs extraction/cleanup.`);
        } else if (clusters.length === 1) {
          console.log(`✅ VERIFIED: Contains exactly 1 clean disconnected frame element.`);
        } else {
          console.log(`⚠️ WARNING: No components found. Transparent skeleton/empty image.`);
        }
        console.log(`==============================================`);
        resolve();
      })
      .on('error', (err) => {
        console.error(`Error loading PNG ${filename}:`, err);
        resolve();
      });
  });
}

async function run() {
  for (const file of files) {
    await analyzeFile(file);
  }
}

run();
