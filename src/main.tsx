// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.tsx';
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

// ハイドレートを行う
import { hydrateRoot } from 'react-dom/client';
// サーバーが生成したHTMLを引き継いで描写する (createRootは破棄して再描写する)
hydrateRoot(
  document.getElementById('root')!,
  <App />, // 描写済みのAppに状態管理やイベントリスナーを差し込む
);
