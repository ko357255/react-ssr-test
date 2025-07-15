import { Route, Routes } from 'react-router-dom';
// import React from 'react';

import Profile from '@/page/Profile.js';
import MyProfile from '@/page/MyProfile.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyProfile />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
