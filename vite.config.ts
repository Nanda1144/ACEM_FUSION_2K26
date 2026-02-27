import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { miaodaDevPlugin } from 'miaoda-sc-plugin';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        exportType: 'named',
        namedExport: 'ReactComponent',
      },
    }),
    // Only include miaodaDevPlugin in development
    command === 'serve' ? (miaodaDevPlugin() as any) : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Keep React ecosystem together to avoid circular chunk warnings.
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
            if (id.includes('@radix-ui')) {
              return 'vendor-radix';
            }
            if (id.includes('recharts')) {
              return 'vendor-recharts';
            }
            if (id.includes('quill') || id.includes('react-quill')) {
              return 'vendor-quill';
            }
            if (id.includes('axios') || id.includes('zod') || id.includes('date-fns')) {
              return 'vendor-utils';
            }
          }
        },
      },
    },
  },
}));
