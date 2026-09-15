import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/SayTurkish/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'pwa-192.svg', 'pwa-512.svg'],
      manifest: {
        name: 'Say Turkish',
        short_name: 'Say Turkish',
        description: 'Быстрый фразник для бытовых ситуаций в Турции.',
        theme_color: '#f7f4ee',
        background_color: '#f7f4ee',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/SayTurkish/',
        start_url: '/SayTurkish/',
        lang: 'ru',
        icons: [
          {
            src: '/SayTurkish/pwa-192.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
          {
            src: '/SayTurkish/pwa-512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest}'],
      },
    }),
  ],
})
