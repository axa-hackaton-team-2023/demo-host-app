import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({include: "**/*.tsx",}),
    federation({
      name: 'app',
      remotes: {
        remoteApp: 'https://axa-hackaton-team-2023.github.io/eh-widget-app/assets/remoteEntry.js',
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  base: '/demo-host-app/'
})
