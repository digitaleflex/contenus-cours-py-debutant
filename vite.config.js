import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  // Configuration pour servir les fichiers markdown
  server: {
    port: 5173,
    open: true,
    fs: {
      strict: false,
      allow: ['..']
    }
  },
  // Ajout de la configuration pour servir les fichiers statiques
  publicDir: 'public',
  assetsInclude: ['**/*.md']
})
