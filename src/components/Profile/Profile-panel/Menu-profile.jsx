import './Menu-profile.css';
import { Link } from 'react-router-dom';

const MenuProfile = () => {
  return (
    <div className='menu-profile-wraper'>
      <div className='menu-profile'>
        <div className='menu-profile__title'>
          <h1>CATCH THE MOMENT</h1>
        </div>
        <div className='menu-profile__link'>
          <Link
            to={'/Profile/Profile'}
            className='menu-profile__profile menu-link'
          >
            Profile
          </Link>
          <Link
            to={'/Profile/Settings'}
            className='menu-profile__settings menu-link'
          >
            Settings
          </Link>
          <Link
            to={'/Profile/LogOut'}
            className='menu-profile__log-out menu-link'
          >
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuProfile;
