export async function GET() {
  const pages = [
    { url: '/', de: '/', en: '/en' },
    { url: '/rabattrechner', de: '/rabattrechner', en: '/en/discount-calculator' },
    { url: '/mehrwertsteuerrechner', de: '/mehrwertsteuerrechner', en: '/en/vat-calculator' },
    { url: '/dreisatz-rechner', de: '/dreisatz-rechner', en: '/en/rule-of-three-calculator' },
    { url: '/prozentuale-differenz', de: '/prozentuale-differenz', en: '/en/percentage-difference' },
    { url: '/gehaltsrechner', de: '/gehaltsrechner', en: '/en/salary-raise-calculator' },
    { url: '/prozentrechner-formel', de: '/prozentrechner-formel', en: '/en/percentage-formula' },
    { url: '/en', de: '/', en: '/en' },
    { url: '/en/discount-calculator', de: '/rabattrechner', en: '/en/discount-calculator' },
    { url: '/en/vat-calculator', de: '/mehrwertsteuerrechner', en: '/en/vat-calculator' },
    { url: '/en/rule-of-three-calculator', de: '/dreisatz-rechner', en: '/en/rule-of-three-calculator' },
    { url: '/en/percentage-difference', de: '/prozentuale-differenz', en: '/en/percentage-difference' },
    { url: '/en/salary-raise-calculator', de: '/gehaltsrechner', en: '/en/salary-raise-calculator' },
    { url: '/en/percentage-formula', de: '/prozentrechner-formel', en: '/en/percentage-formula' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `  <url>
    <loc>https://prozentrechner-online.com${page.url}</loc>
    <lastmod>2026-09-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.url === '/' || page.url === '/en' ? '1.0' : '0.8'}</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://prozentrechner-online.com${page.de}" />
    <xhtml:link rel="alternate" hreflang="en" href="https://prozentrechner-online.com${page.en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://prozentrechner-online.com/" />
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
