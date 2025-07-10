import './App.css';

function App() {
  return (
    // w-screen: 幅をウィンドウいっぱい h-screen: 高さをウィンドウいっぱい
    // w-full/h-full: 親要素に対して100%
    // flex justify-center items-center: 中央揃え
    <div className="App w-screen h-screen flex justify-center items-center bg-gray-200">
      {
        // max-w-sm: 小さめの横幅
        // max-w-md: 中サイズ
        // max-w-lg: 大サイズ
        // max-w-xl: さらに大サイズ
        // w-full: ↑と併用するとそのサイズで最大まで広げ、コンテンツによって狭まらない
      }
      <div className="main-content bg-white p-8 rounded shadow-md text-center max-w-xl min-h-[600px] w-full">
        <h1 className="text-2xl font-bold mb-4">自己紹介サイト</h1>
        <p className="text-gray-700">好きなもの</p>
        <p className="text-gray-700">動物: 猫</p>
        <p className="text-gray-700">料理: オムライス</p>
        <p className="text-gray-700">ゲーム: マインクラフト</p>
      </div>
    </div>
  );
}

export default App;
