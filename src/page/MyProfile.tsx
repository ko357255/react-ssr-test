const MyProfile = () => {
  return (
    // w-screen: 幅をウィンドウいっぱい h-screen: 高さをウィンドウいっぱい
    // w-full/h-full: 親要素に対して100%
    // flex justify-center items-center: 中央揃え
    <div className="App flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {
        // max-w-sm: 小さめの横幅
        // max-w-md: 中サイズ
        // max-w-lg: 大サイズ
        // max-w-xl: さらに大サイズ
        // w-full: ↑と併用するとそのサイズで最大まで広げ、コンテンツによって狭まらない
      }
      <div className="main-content min-h-[600px] w-full max-w-xl rounded bg-white p-8 text-center shadow-md">
        <h1 className="mb-4 text-2xl font-bold">自己紹介サイト</h1>
        <p className="text-gray-700">好きなもの</p>
        <p className="text-gray-700">動物: 猫</p>
        <p className="text-gray-700">料理: オムライス</p>
        <p className="text-gray-700">ゲーム: マインクラフト</p>
      </div>
    </div>
  );
};

export default MyProfile;
