import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// ハイドレートを行う

// サーバーがwindowオブジェクトに埋め込んだ初期データを取得
const initialData = (window as any).__INITIAL_DATA__;

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <BrowserRouter>
      {/* サーバー側の初期データを渡す */}
      <App initialData={initialData} />
    </BrowserRouter>
  </StrictMode>,
);
