import React from 'react';
import { Button } from '../Button/Button';
import './Logo.css';
export const Logo = ({ className, title = 'S', onClick }) => {
  return (
    <Button
      titleButton={title}
      className={className ? className : 'logo'}
      onClick={onClick}
    />
  );
};
