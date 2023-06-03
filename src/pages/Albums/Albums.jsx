import { useState, useEffect } from 'react';
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
  const [isAlbums, setIsAlbums] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflowY = 'scroll';
  }, []);

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
          {!isAlbums && (
            <button className='btn albums__btn' onClick={navigateToAlbum}>
              Create first Album
            </button>
          )}
          <ul className='albums__list'>
            <li className='albums__list-item' data-title='Title'>
              <img
                src='https://i.pinimg.com/564x/b7/e1/e0/b7e1e0ccf375e3b303c1daeefc59fa08.jpg'
                alt=''
                className='albums__list-img'
              />
            </li>
            <li className='albums__list-item' data-title='Title'>
              <img
                src='https://brbymary.com/wp-content/uploads/2021/11/Couple-at-the-free-Horsheshoe-Bay-Lookout-Platform-5-768x1152.jpg'
                alt=''
                className='albums__list-img'
              />
            </li>
            <li className='albums__list-item' data-title='Title'>
              <img
                src='https://queerforty.com/wp-content/uploads/2022/05/pexels-suzy-hazelwood-4542707-1024x628.jpg'
                alt=''
                className='albums__list-img'
              />
            </li>
            <li className='albums__list-item' data-title='Title'>
              <img
                src='https://live.staticflickr.com/65535/51256068003_017334c7b8_o.jpg'
                alt=''
                className='albums__list-img'
              />
            </li>
            <li className='albums__list-item' data-title='Title'>
              <img
                src='https://osvitanova.com.ua/ckeditor_assets/pictures/14185/content_pexels-photo-3760279.jpeg'
                alt=''
                className='albums__list-img'
              />
            </li>
          </ul>
          <ul className='albums__list'>
            <li className='albums__list-item' data-title='Title'>
              <img
                src='https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg'
                alt=''
                className='albums__list-img'
              />
            </li>
            <li className='albums__list-item' data-title='Title'>
              <img
                src='https://images.pexels.com/photos/842569/pexels-photo-842569.jpeg'
                alt=''
                className='albums__list-img'
              />
            </li>
            <li className='albums__list-item' data-title='Title'>
              <img
                src='https://images.pexels.com/photos/2765871/pexels-photo-2765871.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt=''
                className='albums__list-img'
              />
            </li>
            <li className='albums__list-item' data-title='Title'>
              <img
                src='https://images.pexels.com/photos/842569/pexels-photo-842569.jpeg'
                alt=''
                className='albums__list-img'
              />
            </li>
            <li className='albums__list-item' data-title='Title'>
              <img
                src='https://images.pexels.com/photos/2765871/pexels-photo-2765871.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt=''
                className='albums__list-img'
              />
            </li>
          </ul>
        </div>
      </div>
    </AnimatedPage>
  );
};
export default Albums;
