<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/1999/xhtml"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-size: 14px;
            color: #333;
            margin: 0;
            padding: 20px;
            background: #f5f5f5;
          }
          #content {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          h1 {
            font-size: 24px;
            font-weight: 600;
            margin: 0 0 10px;
            color: #111;
          }
          .intro {
            color: #666;
            margin-bottom: 30px;
            line-height: 1.5;
          }
          .intro a {
            color: #0066cc;
            text-decoration: none;
          }
          .intro a:hover {
            text-decoration: underline;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th {
            background: #f8f9fa;
            padding: 12px 8px;
            text-align: left;
            font-weight: 600;
            color: #333;
            border-bottom: 2px solid #dee2e6;
            font-size: 13px;
          }
          td {
            padding: 12px 8px;
            border-bottom: 1px solid #e9ecef;
          }
          tr:hover {
            background: #f8f9fa;
          }
          .url {
            color: #0066cc;
            word-break: break-all;
          }
          .priority, .changefreq, .lastmod {
            color: #666;
            font-size: 13px;
          }
          .stats {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 20px;
            display: flex;
            gap: 30px;
          }
          .stat {
            color: #666;
          }
          .stat strong {
            color: #111;
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <div id="content">
          <h1>XML Sitemap</h1>
          <div class="intro">
            <p>This is an XML Sitemap for search engines like Google, Bing, and Yahoo. Learn more about <a href="https://www.sitemaps.org/">XML sitemaps</a>.</p>
          </div>

          <div class="stats">
            <div class="stat">
              <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong>
              <span> URLs</span>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th style="width: 50%">URL</th>
                <th>Last Modified</th>
                <th>Change Frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}" class="url">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td class="lastmod">
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                  <td class="changefreq">
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td class="priority">
                    <xsl:value-of select="sitemap:priority"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
