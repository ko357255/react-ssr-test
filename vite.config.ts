import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // serverとclientで分離してビルドするための設定
    outDir: 'dist/client', // clientに出力
    emptyOutDir: true, // 中身を削除する
    rollupOptions: {
      // SSR の場合の設定 (CSRでは本来 index.html だが使わない)
      input: '/src/main.tsx', // エントリーポイントを指定
      output: { // 出力先
        entryFileNames: 'main.js',
      }
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  }
});
