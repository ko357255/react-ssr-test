import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="nav mt-10 mb-6 overflow-hidden rounded-lg bg-white py-6 shadow-sm backdrop-blur-sm">
      <nav className="flex justify-around">
        <Link to="/" className="hover:text-blue-500 hover:underline">
          ホーム
        </Link>
        <Link to="/profile" className="hover:text-blue-500 hover:underline">
          詳細ページ
        </Link>
        <Link to="/dog" className="hover:text-blue-500 hover:underline">
          犬の画像
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
