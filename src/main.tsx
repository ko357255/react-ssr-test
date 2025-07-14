// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.tsx';
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// );

// ハイドレートを行う
import { hydrateRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
if (rootElement) {
  hydrateRoot(
    rootElement,
    <App />, // 描写済みのAppにイベントを差し込む
  );
}
