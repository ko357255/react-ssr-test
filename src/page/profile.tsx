const Profile = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-2xl">
        {/* メインプロフィールカード */}
        <div className="mb-6 overflow-hidden rounded-lg border-0 bg-white/80 shadow-xl backdrop-blur-sm">
          <div className="h-32 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
          <div className="relative p-6 pb-4">
            <div className="-mt-16 flex flex-col items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-400 to-purple-600 text-2xl text-white shadow-lg">
                😊
              </div>
              <h1 className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
                自己紹介サイト
              </h1>
              <p className="mt-2 max-w-md text-center text-gray-600">
                こんにちは！私の好きなものを紹介します ✨
              </p>
            </div>
          </div>
        </div>

        {/* 好きなものセクション */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* 動物カード */}
          <div className="group rounded-lg border-0 bg-white/80 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="p-6 pb-3 text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-pink-500 transition-transform duration-300 group-hover:scale-110"></div>
              <h3 className="text-xl font-semibold text-gray-800">動物</h3>
            </div>
            <div className="p-6 pt-0 text-center">
              <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800 hover:bg-orange-200">
                🐱 猫
              </span>
              <p className="mt-3 text-sm text-gray-600">
                可愛くて癒される存在です
              </p>
            </div>
          </div>

          {/* 料理カード */}
          <div className="group rounded-lg border-0 bg-white/80 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="p-6 pb-3 text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-red-500 transition-transform duration-300 group-hover:scale-110"></div>
              <h3 className="text-xl font-semibold text-gray-800">料理</h3>
            </div>
            <div className="p-6 pt-0 text-center">
              <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 hover:bg-yellow-200">
                🍳 オムライス
              </span>
              <p className="mt-3 text-sm text-gray-600">ふわふわで美味しい！</p>
            </div>
          </div>

          {/* ゲームカード */}
          <div className="group rounded-lg border-0 bg-white/80 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="p-6 pb-3 text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-blue-500 transition-transform duration-300 group-hover:scale-110"></div>
              <h3 className="text-xl font-semibold text-gray-800">ゲーム</h3>
            </div>
            <div className="p-6 pt-0 text-center">
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 hover:bg-green-200">
                ⛏️ マインクラフト
              </span>
              <p className="mt-3 text-sm text-gray-600">創造力を発揮できます</p>
            </div>
          </div>
        </div>

        {/* フッター */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>ご覧いただき、ありがとうございました！ 🌟</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
