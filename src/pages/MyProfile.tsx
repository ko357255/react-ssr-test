import { useState } from 'react';

const MyProfile = () => {
  const [count, setCount] = useState(0);

  return (
    // w-screen: 幅をウィンドウいっぱい h-screen: 高さをウィンドウいっぱい
    // w-full/h-full: 親要素に対して100%
    // flex justify-center items-center: 中央揃え
    <div className="flex min-h-screen w-screen items-center justify-center bg-gray-200 p-4">
      {
        // max-w-sm: 小さめの横幅
        // max-w-md: 中サイズ
        // max-w-lg: 大サイズ
        // max-w-xl: さらに大サイズ
        // w-full: ↑と併用するとそのサイズで最大まで広げ、コンテンツによって狭まらない
      }
      <div className="main-content w-full max-w-2xl">
        <div className="mb-6 overflow-hidden rounded-lg bg-white p-8 shadow-xl backdrop-blur-sm">
          <h1 className="mb-4 text-2xl font-bold">自己紹介サイト</h1>
          <p className="mb-2 text-gray-700">好きなもの</p>
          <p className="mb-2 text-gray-700">動物: 猫</p>
          <p className="mb-2 text-gray-700">料理: オムライス</p>
          <p className="mb-2 text-gray-700">ゲーム: マインクラフト</p>
          <p className="mb-2 text-gray-700">カウンター: {count}</p>
          <button
            className="mb-2 rounded-2xl bg-gray-700 p-2 px-5 py-1 text-white"
            onClick={() => setCount(count + 1)}
          >
            増加
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
