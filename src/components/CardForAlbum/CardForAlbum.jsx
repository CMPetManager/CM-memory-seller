import React, { useState } from 'react';
import { ReactComponent as RevertPhoto } from 'assets/icons/revertPhoto.svg';
import './CardForAlbum.css';
export const CardForAlbum = ({ size }) => {
  const [imageShow, setImageShow] = useState(true);
  const [text, setText] = useState('Add text');
  return (
    <div className={size}>
      <RevertPhoto
        className='templateFirst__revert_icon'
        onClick={() => setImageShow(!imageShow)}
      />
      {imageShow ? (
        <img
          src='https://source.unsplash.com/featured/1080x640'
          className='image'
          alt='Landscope'
        />
      ) : (
        <div className='cover'>
          <p className='cover__image__landscope__text'>{text}</p>
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={(e) => console.log(e.target.value)}>
            {' '}
            add text
          </button>
        </div>
      )}
    </div>
  );
};
