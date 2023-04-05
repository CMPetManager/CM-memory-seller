import React from 'react';
import './Button.css';
export const Button = ({ titleButton, onClick }) => {
  return (
    <button onClick={onClick} className='submitBtn' type='submit'>
      {titleButton}
    </button>
  );
};
