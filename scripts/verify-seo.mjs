import http from 'http';

const routes = [
  '/',
  '/eyeglasses',
  '/eyeglasses/crystal-one',
  '/eyeglasses/aero-titanium-x',
  '/eyeglasses/crystalline-01',
  '/eyeglasses/helix-gold',
  '/eyeglasses/nocturne-04',
  '/eyeglasses/void-silver',
  '/eyeglasses/amber-ridge',
  '/sunglasses',
  '/blue-light-glasses',
  '/eye-test',
  '/virtual-try-on',
  '/about',
  '/contact',
  '/guides/choose-frame-for-face-shape',
  '/guides/titanium-vs-acetate-frames',
  '/admin',
];

function fetchPage(path) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + path, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        resolve({ path, statusCode: res.statusCode, html: data });
      });
    }).on('error', (err) => {
      resolve({ path, statusCode: 500, html: err.message });
    });
  });
}

async function run() {
  const results = [];
  let cartReferencesFound = 0;
  let validationErrors = [];

  for (const r of routes) {
    const res = await fetchPage(r);
    const titleMatch = res.html.match(/<title>([^<]*)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : 'Not found';

    const descMatch = res.html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
    const desc = descMatch ? descMatch[1] : 'Not found';

    const canonicalMatch = res.html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
    const canonical = canonicalMatch ? canonicalMatch[1] : 'Not found';

    const h1Matches = [...res.html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
      m[1].replace(/<[^>]*>/g, '').trim()
    );
    const h1Count = h1Matches.length;
    const h1Text = h1Matches[0] || 'Not found';

    const hasJsonLd = res.html.includes('application/ld+json');
    const wordCount = res.html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .split(' ').length;

    // Validation checks
    if (r !== '/admin') {
      // Check for cart references in visible text and attributes (excluding script tags if any)
      const visibleWithoutScripts = res.html.replace(/<script[\s\S]*?<\/script>/gi, '');
      const cartMatches = visibleWithoutScripts.match(/\bcart\b/gi);
      if (cartMatches && cartMatches.length > 0) {
        cartReferencesFound += cartMatches.length;
        validationErrors.push(`[${r}] Found ${cartMatches.length} cart reference(s)`);
      }

      // Check for wholesale references across the entire raw HTML
      const wholesaleMatches = res.html.match(/\bwholesale\b/gi);
      if (wholesaleMatches && wholesaleMatches.length > 0) {
        validationErrors.push(`[${r}] Found ${wholesaleMatches.length} wholesale reference(s)`);
      }

      if (title.length > 60) {
        validationErrors.push(`[${r}] Title exceeds 60 chars (${title.length}): "${title}"`);
      }
      if (desc !== 'Not found' && desc.length > 155) {
        validationErrors.push(`[${r}] Description exceeds 155 chars (${desc.length}): "${desc}"`);
      }
      if (desc.endsWith('...') || desc.endsWith('…')) {
        validationErrors.push(`[${r}] Description ends with ellipsis: "${desc}"`);
      }
      if (h1Count !== 1) {
        validationErrors.push(`[${r}] H1 count is ${h1Count} (expected 1)`);
      }
    }

    results.push({
      path: res.path,
      statusCode: res.statusCode,
      title,
      titleLength: title.length,
      desc,
      descLength: desc.length,
      canonical,
      h1Count,
      h1Text,
      hasJsonLd,
      wordCount,
    });
  }

  // Also check that /cart and /sign-in return 404, and /wholesale redirects to /contact
  const cartRes = await fetchPage('/cart');
  const signInRes = await fetchPage('/sign-in');
  const wholesaleRes = await new Promise((resolve) => {
    http.get('http://localhost:3000/wholesale', (res) => {
      resolve({ statusCode: res.statusCode, location: res.headers.location });
    }).on('error', (err) => resolve({ statusCode: 500, error: err.message }));
  });

  console.log('--- AUDIT RESULTS ---');
  console.log(JSON.stringify(results, null, 2));

  console.log('\n--- VERIFICATION CHECKS ---');
  console.log(`/cart route status: ${cartRes.statusCode} (expected 404)`);
  console.log(`/sign-in route status: ${signInRes.statusCode} (expected 404)`);
  console.log(`/wholesale redirect status: ${wholesaleRes.statusCode} -> ${wholesaleRes.location} (expected 301/308 -> /contact)`);
  console.log(`Cart references count across public pages: ${cartReferencesFound}`);

  if (cartRes.statusCode !== 404) {
    validationErrors.push(`/cart returned ${cartRes.statusCode} instead of 404`);
  }
  if (signInRes.statusCode !== 404) {
    validationErrors.push(`/sign-in returned ${signInRes.statusCode} instead of 404`);
  }
  if (wholesaleRes.statusCode !== 308 && wholesaleRes.statusCode !== 301) {
    validationErrors.push(`/wholesale returned ${wholesaleRes.statusCode} instead of 301/308 redirect`);
  }
  if (wholesaleRes.location !== '/contact' && wholesaleRes.location !== 'http://localhost:3000/contact') {
    validationErrors.push(`/wholesale redirected to ${wholesaleRes.location} instead of /contact`);
  }

  if (validationErrors.length === 0 && cartReferencesFound === 0) {
    console.log('ALL SEO AND CONTENT INTEGRITY CHECKS PASSED SUCCESSFULLY!');
  } else {
    console.error('Validation issues found:');
    validationErrors.forEach((e) => console.error('  - ' + e));
  }
}

run();
