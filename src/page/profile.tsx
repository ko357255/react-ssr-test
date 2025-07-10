const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* メインプロフィールカード */}
        <div className="mb-6 overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-lg">
          <div className="h-32 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
          <div className="relative pb-4 p-6">
            <div className="flex flex-col items-center -mt-16">
              <div className="w-24 h-24 border-4 border-white shadow-lg rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-2xl">
                😊
              </div>
              <h1 className="text-3xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                自己紹介サイト
              </h1>
              <p className="text-gray-600 mt-2 text-center max-w-md">
                こんにちは！私の好きなものを紹介します ✨
              </p>
            </div>
          </div>
        </div>

        {/* 好きなものセクション */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* 動物カード */}
          <div className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white/80 backdrop-blur-sm rounded-lg">
            <div className="text-center pb-3 p-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold text-gray-800">動物</h3>
            </div>
            <div className="text-center p-6 pt-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 hover:bg-orange-200">
                🐱 猫
              </span>
              <p className="text-sm text-gray-600 mt-3">
                可愛くて癒される存在です
              </p>
            </div>
          </div>

          {/* 料理カード */}
          <div className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white/80 backdrop-blur-sm rounded-lg">
            <div className="text-center pb-3 p-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold text-gray-800">料理</h3>
            </div>
            <div className="text-center p-6 pt-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                🍳 オムライス
              </span>
              <p className="text-sm text-gray-600 mt-3">ふわふわで美味しい！</p>
            </div>
          </div>

          {/* ゲームカード */}
          <div className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white/80 backdrop-blur-sm rounded-lg">
            <div className="text-center pb-3 p-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold text-gray-800">ゲーム</h3>
            </div>
            <div className="text-center p-6 pt-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 hover:bg-green-200">
                ⛏️ マインクラフト
              </span>
              <p className="text-sm text-gray-600 mt-3">創造力を発揮できます</p>
            </div>
          </div>
        </div>

        {/* フッター */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>ご覧いただき、ありがとうございました！ 🌟</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
