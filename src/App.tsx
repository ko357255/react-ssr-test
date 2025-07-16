import { Route, Routes } from 'react-router-dom';

import Profile from '@/pages/Profile.js';
import MyProfile from '@/pages/MyProfile.js';
import NotFound from '@/pages/NotFound.js';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MyProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
