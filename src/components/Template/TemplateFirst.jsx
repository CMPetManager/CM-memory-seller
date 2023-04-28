import React from 'react';
import './TemplateFirst.css';
import { CardForAlbum } from 'components/CardForAlbum/CardForAlbum';
export const TemplateFirst = () => {
  return (
    <>
      <CardForAlbum name='ivan' size='big_landscope' />
      <div className='templateFirst_shortImage_container'>
        <CardForAlbum name='pexels' size='big_vertical' />
        <CardForAlbum name='false' size='big_vertical' />
      </div>
    </>
  );
};
