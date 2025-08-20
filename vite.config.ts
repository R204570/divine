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
    // Split large vendor bundles into smaller chunks to avoid >500kb chunks
    rollupOptions: {
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
