import React from 'react';
import './Button.css';
export const Button = ({ titleButton, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={className ? className : 'submitBtn'}
      type='submit'
    >
      {titleButton}
    </button>
  );
};
