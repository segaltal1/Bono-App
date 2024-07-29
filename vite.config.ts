import {defineConfig} from 'vite'
import checker from 'vite-plugin-checker';

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    return {
        base: mode === 'development' ? '/' : '/Bono-App/',
        plugins: [
            checker({typescript: false}), react()
        ],
    }
})
