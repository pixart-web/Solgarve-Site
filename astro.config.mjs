import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
const deployment = JSON.parse(
  readFileSync(new URL('./src/data/deployment.json', import.meta.url), 'utf8'),
);
const readiness = JSON.parse(
  readFileSync(
    new URL('./docs/launch-readiness.json', import.meta.url),
    'utf8',
  ),
);
if (
  process.env.PUBLIC_SITE_MODE === 'production' &&
  Object.values(readiness).some((value) => value !== true)
) {
  throw new Error(
    'Production blocked: complete and approve docs/launch-readiness.json. Local review builds remain available.',
  );
}
export default defineConfig({
  site: deployment.origin,
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
