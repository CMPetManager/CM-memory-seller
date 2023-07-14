import './ProfilePanel.css';
import { Link } from 'react-router-dom';

const ProfilePanel = ({ activePage }) => {
  const linkProfileClass =
    activePage === 'profile' ? 'menu-link active' : 'menu-link';

  const linkSettingsClass =
    activePage === 'settings' ? 'menu-link active' : 'menu-link';

  return (
    <div className='menu-profile'>
      <h1 className='menu-profile__title'>CATCH THE MOMENT</h1>
      <div className='menu-profile__link-container'>
        <Link to={'/profile'} className={linkProfileClass}>
          Profile
        </Link>
        <Link to={'/settings'} className={linkSettingsClass}>
          Settings
        </Link>
      </div>
    </div>
  );
};

export default ProfilePanel;
