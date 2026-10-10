import { readFile, readdir, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';
const root = path.resolve('dist');
async function files(dir) {
  return (
    await Promise.all(
      (await readdir(dir)).map(async (name) => {
        const p = path.join(dir, name);
        return (await stat(p)).isDirectory() ? files(p) : [p];
      }),
    )
  ).flat();
}
const html = (await files(root)).filter((f) => f.endsWith('.html'));
let links = 0;
for (const file of html) {
  const content = await readFile(file, 'utf8');
  if (file === path.join(root, 'index.html')) {
    assert.match(content, /\/pt\//);
    continue;
  }
  assert.equal((content.match(/<h1[ >]/g) || []).length, 1, `${file}: H1`);
  assert.match(content, /<meta name="description"/);
  assert.match(content, /noindex,nofollow/);
  assert.doesNotMatch(
    content,
    /<iframe|<form|turisbook|checkin|checkout|book now|reservar/gi,
    `${file}: forbidden flow`,
  );
  for (const [, href] of content.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const pathname = decodeURI(href.split(/[?#]/)[0]);
    let target = path.join(root, pathname);
    if (pathname.endsWith('/')) target = path.join(target, 'index.html');
    await stat(target).catch(() => {
      throw Error(`${file}: missing ${href}`);
    });
    links++;
  }
}
assert.equal(html.length, 24);
assert.match(await readFile('dist/robots.txt', 'utf8'), /Disallow: \//);
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
assert.doesNotMatch(sitemap, /privacidade|privacy|cookies/);
assert.equal((sitemap.match(/<loc>/g) || []).length, 18);
console.log(
  `PASS: ${html.length} HTML documents, ${links} local references, unique H1s, metadata, noindex, sitemap, no booking/form/iframe flow.`,
);
