#!/usr/bin/env node
/**
 * Serves dist/ the way GitHub Pages serves the project site: files live under /portfolio/,
 * directories resolve to index.html, and unknown paths get 404.html with status 404.
 * Used by Playwright so tests never clash with a running `astro preview`.
 *
 * Usage: node scripts/serve-dist.mjs [port]
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const BASE = '/portfolio/';
const ROOT = join(process.cwd(), 'dist');
const port = Number(process.argv[2] ?? 4330);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};

async function resolveFile(urlPath) {
  if (!urlPath.startsWith(BASE)) return null;
  const relative = normalize(decodeURIComponent(urlPath.slice(BASE.length)));
  if (relative.startsWith('..')) return null;
  let file = join(ROOT, relative);
  if (!file.startsWith(ROOT)) return null;
  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    await stat(file);
    return file;
  } catch {
    return null;
  }
}

createServer(async (request, response) => {
  const { pathname } = new URL(request.url ?? '/', 'http://localhost');
  // GitHub Pages redirects a directory without its trailing slash.
  if (pathname === BASE.slice(0, -1)) {
    response.writeHead(301, { Location: BASE }).end();
    return;
  }
  const file = await resolveFile(pathname);
  const target = file ?? join(ROOT, '404.html');
  const body = await readFile(target);
  response.writeHead(file ? 200 : 404, {
    'Content-Type': TYPES[extname(target)] ?? 'application/octet-stream',
  });
  response.end(request.method === 'HEAD' ? undefined : body);
}).listen(port, () => {
  console.log(`Serving dist/ at http://localhost:${port}${BASE}`);
});
