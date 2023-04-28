import React from 'react';
import './MasterTemplate.css';
export const MasterTemplate = ({ cla, onClick }) => {
  const handleChange = (isActive) => {
    onClick(isActive);
  };
  return (
    <div className={cla}>
      <span className='masterTemplat__label'>MasterTemplate</span>
      <p className='masterTemplat__item' onClick={handleChange(true)}>
        1 Template
      </p>
      <p className='masterTemplat__item' onClick={handleChange(false)}>
        2 Template
      </p>
    </div>
  );
};
