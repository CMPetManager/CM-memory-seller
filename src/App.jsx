import { Route, Routes } from 'react-router-dom';

import './App.css';

import Registration from './components/Authentication/Registration/Registration';
import Login from './components/Authentication/Login/Login';
import ForgotPassword from './components/Authentication/ForgotPassword/ForgotPassword';
import ResetPassword from './components/Authentication/ResetPassword/ResetPassword';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='app'>
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
        <Route path='/albums' element={<div>My Albums</div>} />
        <Route path='*' element={<div>Error</div>} />
      </Routes>
    </div>
  );
}

export default App;
