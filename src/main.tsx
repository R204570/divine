import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import { trackContactClicks } from './lib/analytics'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Production pages arrive prerendered (scripts/prerender.mjs), so attach to that
// markup; the dev server serves an empty root, so render from scratch there.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}

trackContactClicks()
