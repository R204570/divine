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

export function isBot(userAgent: string): boolean {
  const lowercaseUA = userAgent.toLowerCase();
  return ALLOWED_BOTS.some(bot => lowercaseUA.includes(bot));
}
