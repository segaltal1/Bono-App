import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker';

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Bono-App/',
  plugins: [
    checker({ typescript: false }), react()
  ],
})
