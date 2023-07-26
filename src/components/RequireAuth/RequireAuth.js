import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';

const RequireAuth = () => {
  const { auth, isLogout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  });

  return auth?.accessToken ? (
    <Outlet />
  ) : isLogout ? (
    <Navigate to='/' state={{ previousUrl: '/' }} replace />
  ) : (
    <Navigate to='/login' state={{ previousUrl: location.pathname }} replace />
  );
};

export default RequireAuth;
