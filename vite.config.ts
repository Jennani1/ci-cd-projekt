import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/ci-cd-projekt/',
    plugins: [vue()]
})