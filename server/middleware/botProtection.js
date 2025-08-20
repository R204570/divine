import express from 'express';
import path from 'path';
const router = express.Router();

// List of allowed bot User-Agents
const ALLOWED_BOTS = [
  'googlebot',
  'bingbot',
  'yandexbot',
  'duckduckbot',
  'slurp', // Yahoo
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
];

// Function to check if the request is from a known bot
function isBot(userAgent) {
  if (!userAgent) return false;
  const lowercaseUA = userAgent.toLowerCase();
  return ALLOWED_BOTS.some(bot => lowercaseUA.includes(bot));
}

// Middleware to protect robots.txt and sitemap.xml
function protectBotFiles(req, res, next) {
  const isBotFile = req.path === '/robots.txt' || req.path === '/sitemap.xml';
  
  if (isBotFile) {
    const userAgent = req.get('user-agent');
    
    if (!isBot(userAgent)) {
      return res.status(403).send('Access Denied');
    }
  }
  
  next();
}

// Apply the middleware to static files
const staticMiddleware = express.static('public', {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('robots.txt') || filePath.endsWith('sitemap.xml')) {
      res.set('X-Robots-Tag', 'noindex');
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.set('Pragma', 'no-cache');
      res.set('Expires', '0');
    }
  }
});

router.use(staticMiddleware);

export { protectBotFiles };
