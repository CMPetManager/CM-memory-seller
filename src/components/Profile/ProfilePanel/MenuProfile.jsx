import './MenuProfile.css';
import { Link } from 'react-router-dom';

const MenuProfile = () => {
  return (
    <div className='menu-profile-wraper'>
      <div className='menu-profile'>
        <div className='menu-profile__title'>
          <p>CATCH THE MOMENT</p>
        </div>
        <div className='menu-profile__link'>
          <Link to={'/profile'} className='menu-profile__profile menu-link'>
            Profile
          </Link>
          <Link
            to={'/profile/settings'}
            className='menu-profile__settings menu-link'
          >
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuProfile;