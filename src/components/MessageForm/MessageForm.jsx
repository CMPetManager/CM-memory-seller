import React from 'react';
import './MessageForm.css';
import { Button } from '../Button/Button';
export const MessageForm = ({ textLabel, buttonOnClick, setIsOpen }) => {
  return (
    <div className='FormError__container' onClick={() => setIsOpen(false)}>
      <div className='FormError__windowContainer'>
        <h1 className='FormError_bgText'>Catch the</h1>
        <h3 className='FormError_bgSubText'>MOMENT</h3>
        <h2 className='FormError_title'>{textLabel}</h2>
        <div className='button__container'>
          <Button onClick={buttonOnClick} titleButton='Yes' />
          <Button onClick={() => setIsOpen(false)} titleButton='No' />
        </div>
      </div>
    </div>
  );
};
