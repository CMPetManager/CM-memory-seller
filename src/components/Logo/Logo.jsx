import React from 'react';
import { Button } from '../Button/Button';
import './Logo.css';
export const Logo = ({ className }) => {
  return <Button titleButton='S' className={className ? className : 'logo'} />;
};
