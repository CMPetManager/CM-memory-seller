import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const { setAuth, setPersist, setIsLogout } = useAuth();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('persist');

    setAuth({});
    setPersist(false);
    setIsLogout(true);

    navigate('/');
  };

  return logOut;
};

export default useLogout;
