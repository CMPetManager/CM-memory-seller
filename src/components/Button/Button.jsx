import React from 'react';
import './Button.css';
export const Button = ({ titleButton, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={className ? className : 'btn'}
      type='submit'
      {...props}
    >
      {titleButton}
    </button>
  );
};
