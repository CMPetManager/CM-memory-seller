import React, { useState } from 'react';

import { clsx } from 'clsx';
import './Input.css';

export const Input = React.forwardRef(
  ({ label, placeholder, type, errors, icon, className, ...props }, ref) => {
    return (
      <div className='input__container'>
        {icon}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={clsx('input', className)}
          {...props}
        />
        {!errors ? (
          <p>{label}' '</p>
        ) : (
          <p className='input__label__error' htmlFor=''>
            {errors}
          </p>
        )}
      </div>
    );
  }
);
