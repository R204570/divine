import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Multiple entry points for MPA
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'templates/about.html'),
        products: path.resolve(__dirname, 'templates/products.html'),
        productDetail: path.resolve(__dirname, 'templates/product-detail.html'),
        services: path.resolve(__dirname, 'templates/services.html'),
        inquiry: path.resolve(__dirname, 'templates/inquiry.html'),
        gallery: path.resolve(__dirname, 'templates/gallery.html'),
        blog: path.resolve(__dirname, 'templates/blog.html'),
      },
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            // Don't force react/react-dom into a separate chunk — let the bundler decide.
            if (id.includes('recharts')) return 'vendor-charts';
            if (id.includes('lucide-react') || id.includes('@radix-ui')) return 'vendor-ui';
            return 'vendor';
          }
        }
      }
    },
    // Raise warning threshold slightly after splitting
    chunkSizeWarningLimit: 700,
  },
}));
