import useAuth from './useAuth';

const useLogout = () => {
  const { setAuth, setPersist, setIsLogout } = useAuth();

  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('persist');

    setAuth({});
    setPersist(false);
    setIsLogout(true);
  };

  return logOut;
};

export default useLogout;
