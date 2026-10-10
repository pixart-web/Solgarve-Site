import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
const files = {
  pool: '15335547.jpg',
  bedroom: '3936-003.jpg',
  bedroom2: '3937-002.jpg',
  bedroom3: '3941-012.jpg',
  living: '3942-013.jpg',
  kitchen: '3944-011.jpg',
  bathroom: '3943-004.jpg',
  balcony: '3940-006.jpg',
  terrace: '3984-007.jpg',
  reception: '3985-010.jpg',
  beach: '15336227.jpg',
};
const result = {};
for (const [id, file] of Object.entries(files)) {
  const path = `assets/originals/${file}`;
  const m = await sharp(path).metadata();
  const widths = [400, 720, m.width].filter(
    (x, i, a) => x <= m.width && a.indexOf(x) === i,
  );
  for (const width of widths) {
    await sharp(path)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(`public/images/${id}-${width}.webp`);
    await sharp(path)
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 58 })
      .toFile(`public/images/${id}-${width}.avif`);
  }
  await sharp(path).jpeg({ quality: 85 }).toFile(`public/images/${id}.jpg`);
  result[id] = { width: m.width, height: m.height, widths, file };
}
await writeFile('src/data/image-sizes.json', JSON.stringify(result, null, 2));
