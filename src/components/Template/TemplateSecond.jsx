import React from 'react';
import './TemplateFirst.css';
import { CardForAlbum } from 'components/CardForAlbum/CardForAlbum';
export const TemplateSecond = () => {
  return (
    <div className='templateFirst__container'>
      <div className='templateSecond_shortImage_container templateSecond__margin__bottom '>
        <CardForAlbum size='sqrt' />
        <CardForAlbum size='sqrt' />
      </div>

      <CardForAlbum size='landscope' />

      <div className='templateSecond_MicroImage_container'>
        <CardForAlbum size='smal__sqrt' />
        <CardForAlbum size='smal__sqrt' />
        <CardForAlbum size='smal__sqrt' />
      </div>
    </div>
  );
};
