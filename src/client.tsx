// ハイドレートを行う
import { hydrateRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  hydrateRoot(
    rootElement,
    <App />, // 描写済みのAppにイベントを差し込む
  );
}
