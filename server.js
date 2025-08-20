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

// For all other routes, serve the index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
