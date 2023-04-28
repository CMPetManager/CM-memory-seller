import React from 'react';
import './AlbomFooter.css';
export const AlbomFooter = () => {
  return (
    <div className='albomFooter__container'>
      <div className='albomFooter__wrapper__text'>
        <span className='albomFooter__text'>
          Date: {new Date().toISOString().slice(0, 10)}
        </span>
        <span className='albomFooter__text'>
          Create by: Lorem ipsum, dolor sit.
        </span>
      </div>
    </div>
  );
};
