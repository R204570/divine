import type { VercelRequest, VercelResponse } from '@vercel/node';
import { isBot } from '../utils/botValidator';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const userAgent = req.headers['user-agent'] || '';
  
  if (!isBot(userAgent)) {
    return res.status(403).send('Access Denied');
  }

  // Set security headers
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  
  // Create sitemap content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://www.divinefabtech.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.divinefabtech.com/"/>
    <xhtml:link rel="alternate" hreflang="hi" href="https://www.divinefabtech.com/hi"/>
    <xhtml:link rel="alternate" hreflang="gu" href="https://www.divinefabtech.com/gu"/>
    <image:image>
      <image:loc>https://www.divinefabtech.com/Images/logo.png</image:loc>
      <image:title>Divine Fabtech Industries Logo</image:title>
      <image:caption>Leading Manufacturer of Industrial Fabrics and Tarpaulins</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://www.divinefabtech.com/products</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.divinefabtech.com/products"/>
    <xhtml:link rel="alternate" hreflang="hi" href="https://www.divinefabtech.com/hi/products"/>
    <xhtml:link rel="alternate" hreflang="gu" href="https://www.divinefabtech.com/gu/products"/>
  </url>
  <url>
    <loc>https://www.divinefabtech.com/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.divinefabtech.com/services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.divinefabtech.com/gallery</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.divinefabtech.com/blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.divinefabtech.com/inquiry</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  return res.send(sitemap);
}
