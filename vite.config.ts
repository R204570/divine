import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
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
    // The SSR build (src/entry-server.tsx) only feeds scripts/prerender.mjs,
    // so it needs neither the public assets nor the vendor chunk split.
    copyPublicDir: !isSsrBuild,
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks(id: string) {
              if (id.includes('node_modules')) {
                if (id.includes('recharts')) return 'vendor-charts';
                if (id.includes('lucide-react') || id.includes('@radix-ui')) return 'vendor-ui';
                return 'vendor';
              }
            }
          }
        },
    chunkSizeWarningLimit: 700,
  },
}));
