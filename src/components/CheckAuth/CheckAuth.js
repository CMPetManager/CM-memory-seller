import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const CheckAuth = () => {
  const { auth } = useAuth();

  return !auth?.accessToken ? <Outlet /> : <Navigate to='/albums' />;
};

export default CheckAuth;
