import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createProxyMiddleware } from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    middleware: {
      // Configuración del proxy para habilitar CORS
      1: createProxyMiddleware('/api', {
        target: 'https://test-mesa-ayuda.atlassian.net/rest/api/3/issue',
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
    }
  },
  plugins: [vue()],
})



// module.exports = {
//   server: {
//     middlewareMode: 'ssr',
//     entry: './src/server.js'
//   }
// };

