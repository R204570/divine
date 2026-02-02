import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { protectBotFiles } from './server/middleware/botProtection.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Apply bot protection middleware
app.use(protectBotFiles);

// Serve static files from public directory
app.use(express.static(join(__dirname, 'public')));

// Serve static files from dist directory
app.use(express.static(join(__dirname, 'dist')));

// Route mapping for MPA
const routeMap = {
  '/': 'index.html',
  '/about': 'about.html',
  '/products': 'products.html',
  '/products/:productId': 'product-detail.html',
  '/services': 'services.html',
  '/inquiry': 'inquiry.html',
  '/gallery': 'gallery.html',
  '/blog': 'blog.html',
};

// Handle specific routes
app.get('/about', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'about.html'));
});

app.get('/products', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'products.html'));
});

app.get('/products/:productId', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'product-detail.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'services.html'));
});

app.get('/inquiry', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'inquiry.html'));
});

app.get('/gallery', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'gallery.html'));
});

app.get('/blog', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'blog.html'));
});

// For all other routes, serve the index.html (home page)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
