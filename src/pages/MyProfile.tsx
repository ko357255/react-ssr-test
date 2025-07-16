import { useState } from 'react';

const MyProfile = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">詳細ページ</h1>
      <p className="mb-2 text-gray-700">好きなもの</p>
      <p className="mb-2 text-gray-700">動物: 猫</p>
      <p className="mb-2 text-gray-700">料理: オムライス</p>
      <p className="mb-2 text-gray-700">ゲーム: マインクラフト</p>
      <p className="mb-2 text-gray-700">カウンター: {count}</p>
      <button
        className="mb-2 rounded-2xl bg-black p-2 px-5 py-1 text-white shadow transition-colors hover:bg-gray-900 hover:shadow-md active:bg-gray-700 active:shadow-inner"
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>
    </div>
  );
};

export default MyProfile;
