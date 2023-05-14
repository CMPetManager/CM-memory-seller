import React from 'react';
import './Button.css';
export const Button = ({ titleButton, onClick, className }) => {
  return (
    <button onClick={onClick} className={className} type='submit'>
      {titleButton}
    </button>
  );
};
