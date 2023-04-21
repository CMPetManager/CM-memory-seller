import React from 'react';
import './TemplateFirst.css';

import { CardForAlbum } from 'components/CardForAlbum/CardForAlbum';
export const TemplateTree = () => {
  return [1, 2, 3, 4, 5, 6].map(() => (
    <div className='templateFirst__container'>
      <div className='templateSecond_shortImage_container templateSecond__margin__bottom '>
        <CardForAlbum size='large_sqrt' />
        <CardForAlbum size='large_sqrt' />
      </div>

      <CardForAlbum size='large_vertical__sqrt' />

      <div className='templateSecond_MicroImage_container'>
        <CardForAlbum size='mini_srqt' />
        <CardForAlbum size='mini_srqt' />
        <CardForAlbum size='mini_srqt' />
      </div>
    </div>
  ));
};
