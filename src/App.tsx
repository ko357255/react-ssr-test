import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyProfile from '@/page/MyProfile';
import Profile from '@/page/Profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MyProfile />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
  );
}

export default App;
