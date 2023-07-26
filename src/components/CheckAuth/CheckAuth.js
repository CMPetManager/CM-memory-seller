import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const CheckAuth = () => {
  const { auth } = useAuth();
  console.log(JSON.stringify(auth));

  return auth?.accessToken ? <Navigate to='/albums' /> : <Outlet />;
};

export default CheckAuth;
