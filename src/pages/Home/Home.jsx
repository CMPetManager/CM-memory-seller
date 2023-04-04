import { Outlet } from 'react-router-dom';
import ResetPassword from '../../components/Authentication/ResetPassword/ResetPassword';

const Home = () => {
  return (
    <>
      {/* <div>Home</div>
      <Outlet></Outlet>
       */}
      <ResetPassword />
    </>
  );
};
export default Home;
