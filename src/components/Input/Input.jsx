import React from 'react';

import { clsx } from 'clsx';
import './Input.css';

export const Input = React.forwardRef(
  (
    {
      label,
      placeholder,
      type,
      errors,
      icon,
      className,
      classNameWrap,
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx(!errors && 'input__container', classNameWrap)}>
        <div className='input__wrap'>
          {icon}
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={clsx('form__input', className)}
            {...props}
          />
        </div>
        {!errors ? (
          <p>{label}</p>
        ) : (
          <p className='error-message error-message_margin'>{errors}</p>
        )}
      </div>
    );
  }
);
