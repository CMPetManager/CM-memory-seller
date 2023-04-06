import { Route, Routes, useLocation } from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web';

import './App.css';

import Registration from './components/Authentication/Registration/Registration';
import Login from './components/Authentication/Login/Login';
import ForgotPassword from './components/Authentication/ForgotPassword/ForgotPassword';
import ResetPassword from './components/Authentication/ResetPassword/ResetPassword';
import Home from './pages/Home/Home';

function App() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: 'translateY(100%,0)',
      transition: 'all 0.5s ease-in-out',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0%,0)',
      transition: 'all 0.5s ease-in-out',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(-50%,0)',
      transition: 'all 0.5s ease-in-out',
    },
  });
  return (
    <div className='app'>
      {transitions((styles, item) => (
        <animated.div style={styles}>
          <Routes location={item}>
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
            <Route path='/albums' element={<div>My Albums</div>} />
          </Routes>
        </animated.div>
      ))}
    </div>
  );
}

export default App;
