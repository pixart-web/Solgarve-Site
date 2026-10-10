import deployment from '../data/deployment.json';
export function GET() {
  const live = import.meta.env.PUBLIC_SITE_MODE === 'production';
  return new Response(
    live
      ? `User-agent: *\nAllow: /\nSitemap: ${deployment.origin}/sitemap.xml\n`
      : 'User-agent: *\nDisallow: /\n',
    { headers: { 'Content-Type': 'text/plain' } },
  );
}
