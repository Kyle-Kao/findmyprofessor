import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue({
        template: {
            compilerOptions: {
                isCustomElement: (tag) => tag.startsWith('a-')
            }
        }
    })],
    base: '/findmyprofessor/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
})