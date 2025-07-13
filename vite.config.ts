import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // serverとclientで分離してビルドするための設定
    outDir: 'dist/client',
    emptyOutDir: false
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  }
});
