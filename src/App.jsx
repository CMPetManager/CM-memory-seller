import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.css';

import Registration from './components/Authentication/Registration/Registration';
import Login from './components/Authentication/Login/Login';
import ForgotPassword from './components/Authentication/ForgotPassword/ForgotPassword';
import ResetPassword from './components/Authentication/ResetPassword/ResetPassword';
import Home from './pages/Home/Home';
import { Album } from './pages/Album/Album';
import UserProfile from './components/Profile/profile/Profile';
import Albums from './pages/Albums/Albums';

function App() {
  const location = useLocation();

  return (
    <div className='app'>
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home />}>
            <Route path='registration' element={<Registration />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route
              path='reset-password/:resetToken'
              element={<ResetPassword />}
            />
            <Route path='*' element={<div>Error</div>} />
          </Route>
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/album' element={<Album />} />
          <Route path='/albums' element={<Albums />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
