// サーバーがHTMLを描写するために使う

import { renderToString } from 'react-dom/server';
import App from './App';

export function render() {
  return renderToString(<App />);
}
