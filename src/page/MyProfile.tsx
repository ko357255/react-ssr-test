import { FaCat, FaUtensils, FaGamepad } from 'react-icons/fa';

const MyProfile = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-white p-6">
      <div className="w-full max-w-xl rounded-2xl border border-blue-100 bg-white p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-4xl font-extrabold text-blue-700">
          自己紹介サイト
        </h1>

        <ul className="pb-20 space-y-4 text-lg text-gray-800">
          <li className="flex items-center gap-3">
            <FaCat className="text-4xl text-blue-500" />
            <span>動物: 猫</span>
          </li>
          <li className="flex items-center gap-3">
            <FaUtensils className="text-4xl text-pink-500" />
            <span>料理: オムライス</span>
          </li>
          <li className="flex items-center gap-3">
            <FaGamepad className="text-4xl text-green-500" />
            <span>ゲーム: マインクラフト</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
