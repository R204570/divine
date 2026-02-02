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
  
  // Serve robots.txt content
  const robotsTxt = `User-agent: Googlebot
Allow: /
Allow: /Images/

User-agent: Bingbot
Allow: /
Allow: /Images/

User-agent: Twitterbot
Allow: /
Allow: /Images/

User-agent: facebookexternalhit
Allow: /
Allow: /Images/

User-agent: *
Allow: /

# Sitemap location
Sitemap: https://www.divinefabtech.com/sitemap.xml

# Important sections
Allow: /products/
Allow: /about
Allow: /services
Allow: /gallery
Allow: /blog
Allow: /contact

# Media files
Allow: /Images/
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.svg$
Allow: /*.webp$

# Block access to admin or private areas if they exist
Disallow: /admin/
Disallow: /private/
Disallow: /internal/`;

  res.setHeader('Content-Type', 'text/plain');
  return res.send(robotsTxt);
}
