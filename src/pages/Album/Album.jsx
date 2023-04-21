import React, { useState } from 'react';
import './Album.css';
import { ReactComponent as GoBackButton } from 'assets/icons/goBackButton.svg';
import { ReactComponent as ListIcon } from 'assets/icons/listButton.svg';
import { ReactComponent as AlbomLabelIcon } from 'assets/icons/alignIeftIcon.svg';
import { ReactComponent as CheckIcon } from 'assets/icons/checkIcon.svg';
import { ReactComponent as PensilIcon } from 'assets/icons/pensilIcon.svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trashIcon.svg';
import { ReactComponent as CloseEyeIcon } from 'assets/icons/eyeoffIcon.svg';
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
import { MasterTemplate } from 'components/MasterTemplate/MasterTemplate';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const Album = () => {
  const [isOpenTextLabel, setIsOpenTextLabel] = useState(false);
  const [activeMasterTemplate, setMasterTemplate] = useState();
  const [activeColor, setActiveColor] = useState(true);
  const [bgcolor, setBgcolor] = useState('#6F6D6D');
  const [buttonSetting, setButtonSetting] = useState(false);
  const [activeCarusel, setActiveCarusel] = useState(false);
  const [onenModalProfi, setOpenModalProfilUser] = useState(false);
  const [templateCount, setTemplateCount] = useState();
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

  const ChooseTemplate = (data) => {
    switch (data) {
      case 'first':
        return <TemplateFirst />;
      case 'second':
        return <TemplateSecond />;
      case 'third':
        return <TemplateTree />;
      default:
        return <TemplateFirst />;
    }
  };

  const onDragEnd = (result, provided) => {
    console.log(result, provided);
  };
  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className={clsx('album__container')}
    >
      {' '}
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
        <Button titleButton={<GoBackButton />} className='album__roundButton' />
        <div onClick={handleChange}>
          <Logo />
        </div>
      </nav>
      <section className='album__presentation'>
        <img
          className='albom__imgCover'
          src='https://www.timeout.ru/wp-content/uploads/2021/08/pexels-matt-hardy-2179205-scaled.jpg'
          alt='Album'
        />
        <div
          className='albom__listIcon__container'
          onClick={() => setButtonSetting(!buttonSetting)}
        >
          <Button
            titleButton={<ListIcon />}
            className='album__roundButton albom__ListIcon '
          />
          <Button
            titleButton={<CheckIcon />}
            className={clsx(
              'album__roundButton',
              buttonSetting ? 'albom__ListIcon' : 'albom__ListIcon__chech'
            )}
          />
          <Button
            className={clsx(
              'album__roundButton',
              buttonSetting
                ? 'albom__ListIcon'
                : 'albom__ListIcon__closeEyeIcon'
            )}
            titleButton={<CloseEyeIcon />}
          />
          <Button
            className={clsx(
              'album__roundButton',
              buttonSetting ? 'albom__ListIcon' : 'albom__ListIcon__pensilIcon'
            )}
            titleButton={<PensilIcon />}
          />
          <Button
            className={clsx(
              'album__roundButton',
              buttonSetting ? 'albom__ListIcon' : 'albom__ListIcon__trashIcon'
            )}
            titleButton={<TrashIcon />}
          />
        </div>
        <Button
          titleButton='Add photo'
          onClick={() => setActiveCarusel(!activeCarusel)}
          className='button__addPhoto'
        />
      </section>
      <DragDropContext onDragEnd={onDragEnd}>
        {activeCarusel ? <PhotoCarusel className='characters' /> : <></>}
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
                isOpenTextLabel
                  ? 'albom__labelText'
                  : '.albom__labelText__active'
              }
            >
              Я текст и я не знаю как я сюда попал. Дизайнер забыл сказать
              разработчику как и где меня нужно водить
            </p>
          </div>

          {ChooseTemplate(templateCount)}
        </section>
      </DragDropContext>
    </div>
  );
};
