import type { VercelRequest, VercelResponse } from '@vercel/node';

// Inline bot validator to avoid import path issues in Vercel
const ALLOWED_BOTS = [
  'googlebot',
  'bingbot',
  'yandexbot',
  'duckduckbot',
  'slurp',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
];

function isBot(userAgent: string): boolean {
  const lowercaseUA = userAgent.toLowerCase();
  return ALLOWED_BOTS.some(bot => lowercaseUA.includes(bot));
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Set security headers
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
  
  // Create sitemap content
  const today = new Date().toISOString().split('T')[0];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- Home Page -->
  <url>
    <loc>https://www.divinefabtech.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.divinefabtech.com/"/>
    <xhtml:link rel="alternate" hreflang="hi" href="https://www.divinefabtech.com/hi"/>
    <xhtml:link rel="alternate" hreflang="gu" href="https://www.divinefabtech.com/gu"/>
    <image:image>
      <image:loc>https://www.divinefabtech.com/Images/logo.png</image:loc>
      <image:title>Divine Fabtech Industries - Premium Tarpauline & Poncho Manufacturer</image:title>
      <image:caption>Leading Tarpauline Manufacturer in Gujarat, India - Best Quality Waterproof Tarpaulins, Ponchos & Plastic Sheets</image:caption>
    </image:image>
  </url>

  <!-- Products Page -->
  <url>
    <loc>https://www.divinefabtech.com/products</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.divinefabtech.com/products"/>
    <xhtml:link rel="alternate" hreflang="hi" href="https://www.divinefabtech.com/hi/products"/>
    <xhtml:link rel="alternate" hreflang="gu" href="https://www.divinefabtech.com/gu/products"/>
    <image:image>
      <image:loc>https://www.divinefabtech.com/Images/Tarpauline/cover.jpeg</image:loc>
      <image:title>Best Tarpauline Products</image:title>
      <image:caption>Premium Quality Tarpaulines, Ponchos & Waterproof Solutions - Bulk Manufacturing Available</image:caption>
    </image:image>
  </url>

  <!-- Product Detail: Tarpauline -->
  <url>
    <loc>https://www.divinefabtech.com/products/tarpaulins</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.divinefabtech.com/products/tarpaulins"/>
    <xhtml:link rel="alternate" hreflang="hi" href="https://www.divinefabtech.com/hi/products/tarpaulins"/>
    <xhtml:link rel="alternate" hreflang="gu" href="https://www.divinefabtech.com/gu/products/tarpaulins"/>
    <image:image>
      <image:loc>https://www.divinefabtech.com/Images/Tarpauline/Multilayer Tarpauline.jpeg</image:loc>
      <image:title>Multilayer Tarpauline - Premium Quality</image:title>
      <image:caption>100% Waterproof Multilayer Tarpauine with UV Resistant Coating - Custom Sizes Available for Bulk Orders in Gujarat, India</image:caption>
    </image:image>
  </url>

  <!-- Product Detail: Poncho -->
  <url>
    <loc>https://www.divinefabtech.com/products/poncho</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.divinefabtech.com/products/poncho"/>
    <xhtml:link rel="alternate" hreflang="hi" href="https://www.divinefabtech.com/hi/products/poncho"/>
    <xhtml:link rel="alternate" hreflang="gu" href="https://www.divinefabtech.com/gu/products/poncho"/>
    <image:image>
      <image:loc>https://www.divinefabtech.com/Images/Poncho/all.jpeg</image:loc>
      <image:title>Waterproof Poncho Raincoats</image:title>
      <image:caption>Premium Quality Poncho Raincoats - Custom Branding Available - Best Poncho Manufacturer in Gujarat & India</image:caption>
    </image:image>
  </url>

  <!-- About Page -->
  <url>
    <loc>https://www.divinefabtech.com/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.divinefabtech.com/about"/>
    <xhtml:link rel="alternate" hreflang="hi" href="https://www.divinefabtech.com/hi/about"/>
    <xhtml:link rel="alternate" hreflang="gu" href="https://www.divinefabtech.com/gu/about"/>
  </url>

  <!-- Gallery Page -->
  <url>
    <loc>https://www.divinefabtech.com/gallery</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.divinefabtech.com/gallery"/>
    <xhtml:link rel="alternate" hreflang="hi" href="https://www.divinefabtech.com/hi/gallery"/>
    <xhtml:link rel="alternate" hreflang="gu" href="https://www.divinefabtech.com/gu/gallery"/>
    <image:image>
      <image:loc>https://www.divinefabtech.com/Images/Tarpauline/cover.jpeg</image:loc>
      <image:title>Tarpauline Gallery</image:title>
      <image:caption>High-Quality Tarpaulines & Ponchos - Photo Gallery of Our Premium Products</image:caption>
    </image:image>
  </url>

  <!-- Contact Page -->
  <url>
    <loc>https://www.divinefabtech.com/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.95</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.divinefabtech.com/contact"/>
    <xhtml:link rel="alternate" hreflang="hi" href="https://www.divinefabtech.com/hi/contact"/>
    <xhtml:link rel="alternate" hreflang="gu" href="https://www.divinefabtech.com/gu/contact"/>
  </url>

  <!-- Inquiry Page -->
  <url>
    <loc>https://www.divinefabtech.com/inquiry</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.divinefabtech.com/inquiry"/>
    <xhtml:link rel="alternate" hreflang="hi" href="https://www.divinefabtech.com/hi/inquiry"/>
    <xhtml:link rel="alternate" hreflang="gu" href="https://www.divinefabtech.com/gu/inquiry"/>
  </url>
</urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    return res.status(200).send(sitemap);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.setHeader('Content-Type', 'application/xml');
    return res.status(500).send('<?xml version="1.0" encoding="UTF-8"?><error>Internal Server Error</error>');
  }
}
