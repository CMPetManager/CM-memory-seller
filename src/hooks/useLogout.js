import useAuth from './useAuth';

const useLogout = () => {
  const { setAuth, setPersist } = useAuth();

  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('persist');

    setAuth({});
    setPersist(false);
  };

  return logOut;
};

export default useLogout;
