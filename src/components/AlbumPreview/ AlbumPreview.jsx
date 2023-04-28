import React, { useState } from 'react';
import { EditableText } from 'components/EditableText/EditableText';
import { Button } from 'components/Button/Button';
import { ReactComponent as ListIcon } from 'assets/icons/listButton.svg';
import { ReactComponent as CheckIcon } from 'assets/icons/checkIcon.svg';
import { ReactComponent as PensilIcon } from 'assets/icons/pensilIcon.svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trashIcon.svg';
import { ReactComponent as CloseEyeIcon } from 'assets/icons/eyeoffIcon.svg';
import { clsx } from 'clsx';
export const AlbumPreview = () => {
  const [presentationImage, setPresentationImage] = useState();
  const [presentationText, setpresentationText] = useState(true);
  const [buttonSetting, setButtonSetting] = useState(false);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPresentationImage(url);
    };
  };
  return (
    <section className='album__presentation'>
      {presentationImage ? (
        <>
          <div
            className='album__presentation_setting__container'
            onClick={() => setpresentationText(!presentationText)}
          >
            <span className='album__presentation_setting'></span>
            <span className='album__presentation_setting'></span>
            <span className='album__presentation_setting'></span>
          </div>
          {presentationText ? (
            <img
              className='albom__imgCover'
              src={presentationImage}
              alt='Album'
            />
          ) : (
            <div className='album__presentation__text'>
              <EditableText text='Add text' />{' '}
            </div>
          )}
        </>
      ) : (
        <div className='album__presentation__text'>
          <span className='album__presentation__input__text'>Add photo</span>
          <input
            className='album__presentation__input__img'
            type='file'
            onChange={handleImageChange}
          />
        </div>
      )}
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
            buttonSetting ? 'albom__ListIcon' : 'albom__ListIcon__closeEyeIcon'
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
    </section>
  );
};
