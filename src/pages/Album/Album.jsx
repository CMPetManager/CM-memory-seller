import React, { useState } from 'react';
import './Album.css';
import { ReactComponent as GoBackButton } from 'assets/icons/goBackButton.svg';

import { ReactComponent as AlbomLabelIcon } from 'assets/icons/alignIeftIcon.svg';

import { ReactComponent as UpIcon } from 'assets/icons/chevronsuUpIcon.svg';
import { Button } from 'components/Button/Button';
import { Logo } from 'components/Logo/Logo';
import { clsx } from 'clsx';
import { PhotoCarusel } from 'components/photoCarusel/PhotoCarusel';
import { TemplateFirst } from 'components/Template/TemplateFirst';
import { TemplateSecond } from 'components/Template/TemplateSecond';
import { TemplateTree } from 'components/Template/TemplateTree';
import { AlbomFooter } from 'components/AlbomFooter/AlbomFooter';
import { ModalProfilUser } from 'components/ModalProfilUser/ModalProfilUser';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AlbumPreview } from 'components/AlbumPreview/ AlbumPreview';
import { MessageForm } from 'components/MessageForm/MessageForm';
import { useNavigate } from 'react-router-dom';
export const Album = () => {
  const [isOpenTextLabel, setIsOpenTextLabel] = useState(false);
  const [activeMasterTemplate, setMasterTemplate] = useState();
  const [activeColor, setActiveColor] = useState(true);
  const [bgcolor, setBgcolor] = useState('#6F6D6D');

  const [activeCarusel, setActiveCarusel] = useState(false);
  const [onenModalProfi, setOpenModalProfilUser] = useState(false);
  const [templateCount, setTemplateCount] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const navigate = useNavigate();
  const handleChange = (value) => {
    setOpenModalProfilUser(!onenModalProfi);
  };
  const colorsArr = [
    '#6F6D6D',
    '#97876B',
    '#310000',
    '#111111',
    '#A64925',
    '#C6B8A1',
    '#EDDABA',
    '#39291B',
    '#A67575',
    '#310831',
    '#0C3947',
    '#008DBA',
    '#255724',
    '#7E5D42',
    '#A52A2A',
    '#57724B',
    '#A9A9A9',
    '#000000',
    '#483C32',
    '#36454F ',
  ];

  const ChooseTemplate = ({ data, index }) => {
    switch (data) {
      case 'first':
        return <TemplateFirst index={index} />;
      case 'second':
        return <TemplateSecond index={index} />;
      case 'third':
        return <TemplateTree index={index} />;
      default:
        return <TemplateFirst index={index} />;
    }
  };
  document.body.style.overflow = 'scroll';
  const TemplateList = ({ count, data }) => {
    const list = [];
    for (let index = 0; index < count; index++) {
      list.push(<ChooseTemplate data={data} index={index} />);
    }
    return list;
  };
  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className={clsx('album__container')}
    >
      {isOpen && (
        <MessageForm
          setIsOpen={setIsOpen}
          textLabel='Are you sure you want to exit without saving the album?'
          buttonOnClick={() => navigate('/')}
        />
      )}

      {isLogout && (
        <MessageForm
          setIsOpen={setIsLogout}
          textLabel='Are you sure you want to log out?'
          buttonOnClick={() => navigate('/album')}
        />
      )}

      <ModalProfilUser onModalActive={onenModalProfi} />
      <Button
        onClick={() => window.scrollTo(0, 0)}
        titleButton={<UpIcon />}
        className='album__roundButton  album__upIcon '
      />
      <div className='album__wrapper_for_button_view'>
        <button
          className='albom__button_view'
          onClick={() => setMasterTemplate(!activeMasterTemplate)}
        >
          <div
            className={
              activeMasterTemplate
                ? 'masterTemplate__container'
                : 'masterTemplate__container__Active'
            }
          >
            <span className='masterTemplat__label'>MasterTemplate</span>
            <p
              className='masterTemplat__item'
              onClick={() => setTemplateCount('first')}
            >
              1 Template
            </p>
            <p
              className='masterTemplat__item'
              onClick={() => setTemplateCount('second')}
            >
              2 Template
            </p>
            <p
              className='masterTemplat__item'
              onClick={() => setTemplateCount('third')}
            >
              3 Template
            </p>
          </div>
          <span className='text_transform'>Template</span>
        </button>
        <button
          className='albom__button_view'
          onClick={() => setActiveColor(!activeColor)}
        >
          <div
            className={
              activeColor
                ? 'masterColor__container '
                : 'masterColor__container__Active '
            }
          >
            <div className='color_content'>
              <p className='masterTemplat__label'>Color</p>
              <div className='color_grid'>
                {colorsArr.map((color, index) => {
                  return (
                    <div
                      onClick={() => {
                        setBgcolor(color);
                      }}
                      className={'div' + (index + 1)}
                      key={color}
                      style={{
                        backgroundColor: color,
                        height: '34px',
                        width: '34px',
                        borderRadius: '50%',
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
          <p className='text_transform'>Color</p>
          <div className='color__container'></div>
        </button>
      </div>
      <nav className='album__NavHeadContainer'>
        <Button
          titleButton={<GoBackButton />}
          className='album__roundButton'
          onClick={() => setIsOpen(true)}
        />
        <div onClick={handleChange}>
          <Logo />
        </div>
      </nav>
      <AlbumPreview />
      <Button
        titleButton='Add photo'
        onClick={() => setActiveCarusel(!activeCarusel)}
        className='button__addPhoto'
      />
      <section className='album__wrapper'>
        <AlbomLabelIcon
          className={clsx(
            'albom__labelIcon',
            isOpenTextLabel ? 'albom__labelIcon__active' : ''
          )}
          onClick={() => setIsOpenTextLabel(!isOpenTextLabel)}
        />

        <div
          className={
            isOpenTextLabel
              ? 'albom__labelText__container'
              : 'albom__labelText__container__active'
          }
        >
          <p
            className={
              isOpenTextLabel ? 'albom__labelText' : '.albom__labelText__active'
            }
          >
            Я текст и я не знаю как я сюда попал. Дизайнер забыл сказать
            разработчику как и где меня нужно водить
          </p>
        </div>
      </section>
      <DndProvider backend={HTML5Backend}>
        {activeCarusel ? <PhotoCarusel className='characters' /> : <></>}

        <TemplateList count={6} data={templateCount} />
      </DndProvider>
      <AlbomFooter />
    </div>
  );
};
