// サーバーがHTMLを描写するために使う

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../src/App.js';

export function render(url: string, initialData: any) {
  return renderToString(
    // url を元に静的にルーティングを行う
    // ハイドレート後に BrowserRouter に引き継ぐ
    <StaticRouter location={url}>
      <App initialData={initialData} />
    </StaticRouter>,
  );
}
