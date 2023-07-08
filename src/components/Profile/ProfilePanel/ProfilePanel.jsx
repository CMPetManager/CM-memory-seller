import './ProfilePanel.css';
import { Link } from 'react-router-dom';

const ProfilePanel = () => {
  return (
    <div className='menu-profile'>
      <h1 className='menu-profile__title'>CATCH THE MOMENT</h1>
      <div className='menu-profile__link-container'>
        <Link to={'/profile'} className='menu-link'>
          Profile
        </Link>
        <Link to={'/settings'} className='menu-link'>
          Settings
        </Link>
      </div>
    </div>
  );
};

export default ProfilePanel;
