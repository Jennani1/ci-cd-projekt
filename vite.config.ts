import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/ci-cd-app/', // viktigt för GitHub Pages
    plugins: [vue()],
    test: {
        environment: 'jsdom'
    }
})