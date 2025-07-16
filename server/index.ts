import express from 'express'; // サーバーを建てるためのモジュール
import path from 'path'; // パス指定のために使う
import { fileURLToPath } from 'url';
import { render } from './entry-server.js';
import { matchRoutes } from 'react-router-dom';

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
    // dist/client のファイルを公開
    path.join(distDir, 'client'),
    { index: false }, // indexを読み取らない
  ),
);

const routes = [
  { path: '/' },
  { path: '/profile' },
  { path: '*' }, // 404
];

// ルーティングの全パスに対して dist/index.html を返す
// ※ react-router を使う場合の設定
app.get('*', (req, res) => {
  const matched = matchRoutes(routes, req.url); // ルートにマッチするかどうか
  const is404 = !matched || matched[0].route.path === '*'; // 404かどうか

  // サーバー側でHTMLを生成する
  // req.url: 現在のURL
  const appElement = render(req.url);
  // const appElement = "<div>test</div>"

  const html = `
    <!doctype html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
        <link rel="stylesheet" crossorigin href="/assets/main-DsHAClZ3.css">
      </head>
      <body>
        <div id="root">${appElement}</div>
        <script type="module" crossorigin src="/main.js"></script>
      </body>
    </html>
  `;

  if (is404) {
    // 404 statusを返す
    res.status(404);
  }

  // htmlを返す
  res.send(html);
});

// サーバーをポート番号で起動する
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
