import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';
import { createSpaFallback } from './create-spa-fallback.mjs';

test('copies index.html to 404.html for GitHub Pages SPA fallback', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'portfolio-spa-'));

  try {
    await writeFile(join(dir, 'index.html'), '<h1>Portfolio</h1>');

    await createSpaFallback(dir);

    assert.equal(await readFile(join(dir, '404.html'), 'utf8'), '<h1>Portfolio</h1>');
  } finally {
    await rm(dir, { force: true, recursive: true });
  }
});
