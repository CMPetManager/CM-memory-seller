import React, { useEffect, useState } from 'react';
import './ModalProfilUser.css';
import { Logo } from '../Logo/Logo';
export const ModalProfilUser = ({ onModalActive }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const handleChange = (msg) => {
    setIsWindowOpen(false);
    alert(msg);
    console.log('Parent', isWindowOpen);
  };
  console.log('isWindowOpen=', isWindowOpen);
  useEffect(() => {
    setIsWindowOpen(onModalActive ? true : false);
  }, [onModalActive]);

  return (
    isWindowOpen && (
      <div
        className='modalProfilUser__wrapper'
        onClick={(e) => {
          if (e.target !== e.currentTarget) {
            return;
          }
          handleChange('window close');
        }}
      >
        <div className='modalProfilUser__container'>
          <div className='modalProfilUser__header'>
            <Logo className='modalProfilUser__logo' />
            <div className='modalProfilUser__information'>
              <p className='modalProfilUser__userName'>Борис Ельцин</p>
              <p className='modalProfilUser__email'>Теща@злая.com</p>
            </div>
          </div>
          <div className='modalProfilUser__main'>
            <p
              className='modalProfilUser__title'
              onClick={() => handleChange('Profile')}
            >
              Profile
            </p>
            <p
              className='modalProfilUser__title'
              onClick={() => handleChange('Settings')}
            >
              Settings
            </p>
            <p
              className='modalProfilUser__title'
              onClick={() => handleChange('Log out')}
            >
              Log out
            </p>
          </div>
        </div>
      </div>
    )
  );
};
