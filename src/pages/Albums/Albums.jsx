import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from 'hooks/useAxiosPrivate';

import './Albums.css';

import { Logo } from 'components/Logo/Logo';
import { ModalProfilUser } from 'components/ModalProfilUser/ModalProfilUser';
import AnimatedPage from 'components/AnimatedPage/AnimatedPage';
import { MessageForm } from 'components/MessageForm/MessageForm';
import AlbumsList from 'components/AlbumsList/AlbumsList';

import { albumsMocked } from 'mocked_data';
import { filterAlbums } from 'helpers/filterAlbums';
import { divideToChunks } from 'helpers/divideAlbumsToChuncks';

import plus from 'assets/icons/plus-circle.svg';
import minus from 'assets/icons/minus-circle.svg';
import useAuth from 'hooks/useAuth';
import useLogout from 'hooks/useLogout';

const Albums = () => {
  const [albums, setAlbums] = useState(albumsMocked);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const logOut = useLogout();

  const filteredAlbums = filterAlbums(albums, search);
  const chunksAlbums = divideToChunks(filteredAlbums, 5);

  useEffect(() => {
    document.body.style.overflowY = 'scroll';
  }, []);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const { userId } = auth;

    const getAlbums = async () => {
      try {
        const response = await axiosPrivate.get(`albums/${userId}`, {
          signal: controller.signal,
        });

        console.log(response.data);
        // isMounted && setAlbums(response.data);
      } catch (err) {
        console.error(err);
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    // getAlbums();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handleOpenModal = () => {
    setIsModalOpened((prev) => !prev);
  };

  const handleIsLogout = () => {
    setIsLogout((prev) => !prev);
  };

  const handleIsChecked = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleOnSearch = (e) => {
    setSearch(e.target.value);
  };

  const navigateToAlbum = () => {
    navigate('/album');
  };

  const handleConfirmLogoutMsg = () => {
    logOut();
    navigate('/');
  };

  return (
    <AnimatedPage>
      <div className='albums__wrap'>
        {isLogout && (
          <MessageForm
            setIsOpen={setIsLogout}
            textLabel='Are you sure you want to log out?'
            buttonOnClick={handleConfirmLogoutMsg}
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
              <input
                type='checkbox'
                className='checkbox'
                onChange={handleIsChecked}
              />
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
              value={search}
              onChange={handleOnSearch}
            />
          </div>
        </div>
        <div
          className={
            isChecked
              ? 'albums__container albums__container_minimize'
              : 'albums__container'
          }
        >
          {!albumsMocked.length ? (
            <button className='btn albums__btn' onClick={navigateToAlbum}>
              Create first Album
            </button>
          ) : (
            <AlbumsList isChecked={isChecked} albums={chunksAlbums} />
          )}
        </div>
      </div>
    </AnimatedPage>
  );
};
export default Albums;
