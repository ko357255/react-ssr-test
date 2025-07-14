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
    // rollupOptions: {
    //   input: 'index.html', // エントリーポイントを指定
    // },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  }
});
