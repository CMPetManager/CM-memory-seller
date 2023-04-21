import { Route, Routes } from 'react-router-dom';

import './App.css';

import Registration from './components/Authentication/Registration/Registration';
import Login from './components/Authentication/Login/Login';
import ForgotPassword from './components/Authentication/ForgotPassword/ForgotPassword';
import ResetPassword from './components/Authentication/ResetPassword/ResetPassword';
import Home from './pages/Home/Home';
import { Album } from './pages/Album/Album';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route
            path='/reset-password/:resetToken'
            element={<ResetPassword />}
          />
        </Route>
        <Route path='/album' element={<Album />} />
        <Route path='*' element={<div>Error</div>} />
      </Routes>
    </div>
  );
}

export default App;
