import React, { useState } from 'react';
import './FormError.css';
import { Button } from '../Button/Button';
export const FormError = ({ textLabel, titleButton, buttonOnClick }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  return (
    <div className='FormError__container'>
      <div
        className='FormError__windowContainer'
        onClick={(e) => {
          if (e.target !== e.currentTarget) {
            return;
          }
          setIsWindowOpen(!isWindowOpen);
        }}
      >
        <h1 className='FormError_bgText'>Catch the</h1>
        <h3 className='FormError_bgSubText'>MOMENT</h3>
        <h2 className='FormError_title'>{textLabel}</h2>
        <Button onClick={buttonOnClick} titleButton={titleButton} />
      </div>
    </div>
  );
};
