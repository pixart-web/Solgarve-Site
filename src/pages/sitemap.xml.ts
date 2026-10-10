import deployment from '../data/deployment.json';
import { routes, url, type Lang, type PageKey } from '../data/site';
import { apartments, apartmentUrl } from '../data/content';
export function GET() {
  const paths = (['pt', 'en'] as Lang[]).flatMap((lang) => [
    ...Object.keys(routes)
      .filter((key) => key !== 'privacy' && key !== 'cookies')
      .map((key) => url(lang, key as PageKey)),
    ...apartments.map((a) => apartmentUrl(lang, a)),
  ]);
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${deployment.origin}${path}</loc></url>`).join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
