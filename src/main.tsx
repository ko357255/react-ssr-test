import { StrictMode } from 'react';
// import { hydrateRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { createRoot } from 'react-dom/client';

// ハイドレートを行う
// サーバーが生成したHTMLを引き継いで描写する (createRootは破棄して再描写する)

createRoot(
  document.getElementById('root')!,
  <StrictMode>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </StrictMode>,
);
