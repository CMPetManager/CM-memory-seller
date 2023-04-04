import React, { useState } from 'react';
import hidePass from '../../components/assets/img/IconHidePass.svg';
import showPass from '../../components/assets/img/IconShowPass.svg';
import './Input.css';
export const Input = React.forwardRef(
  ({ placeholder, type, label, errors, visibleIcon, ...props }, ref) => {
    const [visiblePass, setViseblePass] = useState(true);
    const [isPassword, setIsPassword] = useState(type);
    return (
      <div className='input__container'>
        {visibleIcon ? (
          <img
            className='image_eye'
            src={visiblePass ? showPass : hidePass}
            alt='eye icon'
            onClick={() => {
              setViseblePass(!visiblePass);
              setIsPassword(visiblePass ? type : 'text');
            }}
          />
        ) : (
          <></>
        )}
        <input
          ref={ref}
          type={isPassword}
          placeholder={placeholder}
          className='input'
        />
        {!errors ? (
          <label htmlFor=''>{label}</label>
        ) : (
          <label htmlFor=''>{errors}</label>
        )}
      </div>
    );
  }
);
