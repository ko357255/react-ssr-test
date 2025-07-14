import express from 'express'; // サーバーを建てるためのモジュール
import path from 'path'; // パス指定のために使う
import { fileURLToPath } from 'url';
import { renderToString } from 'react-dom/server';
import App from '../src/App.js';
// import { render } from '../dist/server/entry-server.js';


// サーバーを建てるためのもの
const app = express();
// サーバーのポート番号
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);

// path.direname(): ファイルのディレクトリが入る
const __dirname = path.dirname(__filename); // .../dist/server

// path.direname(): 親のディレクトリを取得
const distDir = path.dirname(__dirname); //  .../dist

app.use(
  // 静的ファイル配信
  express.static(
    distDir, // distの中を公開
  ),
);

// ルーティングの全パスに対して dist/index.html を返す
// ※ react-router を使う場合の設定
app.get('*', (_req, res) => {
  // // HTTPレスポンスを送る
  // res.sendFile(path.join(distDir, 'index.html'));

  // サーバー側でHTMLを生成する
  const appElement = renderToString(<App />);

  const html = `
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <title>Vite + React + TS</title>
        <link rel="stylesheet" href="/assets/index-BevB-7fz.css" />
      </head>
      <body>
        <div id="root">${appElement}</div>
      </body>
    </html>
  `

  // htmlを返す
  res.send(html);
});

// サーバーをポート番号で起動する
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
