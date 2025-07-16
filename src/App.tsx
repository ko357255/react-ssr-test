import { Route, Routes } from 'react-router-dom';
import Navigation from '@/components/Navigation.js';
import MyProfile from '@/pages/MyProfile.js';
import NotFound from '@/pages/NotFound.js';
import Home from '@/pages/Home.js';
import Dog from '@/pages/Dog.js';

const App = ({ initialData }: { initialData: any }) => {
  return (
    <div className="app min-h-screen w-screen bg-gray-200 p-4">
      <div className="mx-auto w-full max-w-2xl">
        <Navigation />
        <div className="main-content mb-6 overflow-hidden rounded-lg bg-white p-8 shadow-sm backdrop-blur-sm">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/dog" element={<Dog initialData={initialData} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
