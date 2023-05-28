import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Albums.css';

import { Logo } from 'components/Logo/Logo';
import { ModalProfilUser } from 'components/ModalProfilUser/ModalProfilUser';
import AnimatedPage from 'components/AnimatedPage/AnimatedPage';
import { MessageForm } from 'components/MessageForm/MessageForm';

import plus from 'assets/icons/plus-circle.svg';
import minus from 'assets/icons/minus-circle.svg';

const Albums = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpened((prev) => !prev);
  };

  const handleIsLogout = () => {
    setIsLogout((prev) => !prev);
  };

  const navigateToAlbum = () => {
    navigate('/album');
  };

  return (
    <AnimatedPage>
      <div className='albums__wrap'>
        {isLogout && (
          <MessageForm
            setIsOpen={setIsLogout}
            textLabel='Are you sure you want to log out?'
            buttonOnClick={() => navigate('/')}
          />
        )}
        <div className='albums__back albums__back-top'>Catch the</div>
        <div className='albums__back albums__back-bottom'>Memories</div>
        <div className='albums__profile-wrap'>
          <h1 className='albums__logo'>Catch the moment</h1>
          <Logo onClick={handleOpenModal} />
          {isModalOpened && (
            <ModalProfilUser
              handleOpenModal={handleOpenModal}
              handleIsLogout={handleIsLogout}
            />
          )}
        </div>
        <div className='albums__text-wrap'>
          <h2 className='albums__title'>YOUR MEMORIES ALBUMS</h2>
          <p className='albums__subtitle'>
            Create your dream album according to yourself.
          </p>
        </div>
        <div className='albums__control-panel'>
          <button className='btn albums__control-btn' onClick={navigateToAlbum}>
            New album
          </button>
          <div className='albums__control-wrap'>
            <div className='albums__checkbox-wrap'>
              <input type='checkbox' className='checkbox' />
              <img
                src={plus}
                alt='increase button'
                className='albums__checkbox-icon plus'
              />
              <img
                src={minus}
                alt='decrease button'
                className='albums__checkbox-icon minus'
              />
            </div>
            <input
              type='search'
              placeholder='Search'
              className='form__input albums__search-input'
            />
          </div>
        </div>
        <div className='albums__container'>
          <button className='btn albums__btn' onClick={navigateToAlbum}>
            Create first Album
          </button>
          <div className='albums__list'></div>
        </div>
      </div>
    </AnimatedPage>
  );
};
export default Albums;
