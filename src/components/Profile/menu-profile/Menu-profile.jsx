import './Menu-profile.css';
import { Link } from 'react-router-dom';

const MenuProfile = () => {
  return (
    <div className='wraper'>
      <div className='menu-profile'>
        <div className='menu-profile__title'>
          <h1>CATCH THE MOMENT</h1>
        </div>
        <div className='menu-profile__link'>
          <Link to={'/Profile/Profile'} className='menu-profile__profile'>
            Profile
          </Link>
          <Link to={'/Profile/Settings'} className='menu-profile__settings'>
            Settings
          </Link>
          <Link to={'/Profile/LogOut'} className='menu-profile__log-out'>
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuProfile;
