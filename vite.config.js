import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: 'dist', // Verzeichnis für die kompilierten Dateien
    rollupOptions: {
      input: 'index.html' // Sicherstellen, dass die richtige index.html verwendet wird
    }
  }
})
