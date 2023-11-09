import { useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

import './ModalProfilUser.css';
import { Logo } from '../Logo/Logo';

export const ModalProfilUser = ({ handleOpenModal, handleIsLogout }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { name, email } = auth;

  const handleLogoutClicked = () => {
    handleOpenModal();
    handleIsLogout();
  };

  return (
    <div
      className='modalProfilUser__wrapper'
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        handleOpenModal((prev) => !prev);
      }}
    >
      <div className='modalProfilUser__container'>
        <div className='modalProfilUser__header'>
          <Logo className='modalProfilUser__logo' title={name[0]} />
          <div className='modalProfilUser__information'>
            <p className='modalProfilUser__userName'>{name}</p>
            <p className='modalProfilUser__email'>{email}</p>
          </div>
        </div>
        <div className='modalProfilUser__main'>
          <p
            className='modalProfilUser__title'
            onClick={() => navigate('/profile')}
          >
            Profile
          </p>
          <p
            className='modalProfilUser__title'
            onClick={() => navigate('/settings')}
          >
            Settings
          </p>
          <p className='modalProfilUser__title' onClick={handleLogoutClicked}>
            Log out
          </p>
        </div>
      </div>
    </div>
  );
};
