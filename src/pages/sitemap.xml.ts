import type { APIRoute } from 'astro';
import { routes } from '../i18n/routes';
import { site } from '../data/site';

// `routes` lists only the indexable content pages, so the error pages (404, 500)
// — which carry `noindex` — are excluded from the sitemap by construction.
const ORIGIN = new URL(site.url).origin;
const LOCALES = ['de', 'en'] as const;

export const GET: APIRoute = () => {
  const { iso: lastmod } = site.updated;

  const urls = Object.values(routes).flatMap((paths) =>
    LOCALES.map((locale) => {
      // Each page points at its own translation pair; x-default is this page's
      // default-locale URL, not the site root.
      const alternates = [
        ...LOCALES.map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${alt}" href="${ORIGIN}${paths[alt]}" />`
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}${paths.de}" />`,
      ].join('\n');

      return `  <url>
    <loc>${ORIGIN}${paths[locale]}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${paths.de === '/' ? '1.0' : '0.8'}</priority>
${alternates}
  </url>`;
    })
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
