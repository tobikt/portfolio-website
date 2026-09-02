import { copyFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

export async function createSpaFallback(distDir = 'dist/app/browser') {
  const indexPath = join(distDir, 'index.html');
  const fallbackPath = join(distDir, '404.html');

  await stat(indexPath);
  await copyFile(indexPath, fallbackPath);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const distDir = process.argv[2] ?? 'dist/app/browser';
  await createSpaFallback(distDir);
  console.log(`Created SPA fallback at ${join(distDir, '404.html')}`);
}
