import React, { useState } from 'react';
import hidePass from '../../components/assets/img/IconHidePass.svg';
import showPass from '../../components/assets/img/IconShowPass.svg';
import './Input.css';

export const Input = ({
  label,
  register,
  placeholder,
  type,
  errors,
  visibleIcon,
  name,
  textError,
}) => {
  const [visiblePass, setViseblePass] = useState(false);
  const [password, setIsPassword] = useState(type);
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
        {...register(name, { required: `${textError}` })}
        type={password}
        placeholder={placeholder}
        className='input'
      />
      {!errors ? (
        <label className='' htmlFor=''>
          {label}
        </label>
      ) : (
        <label className='input__label__error' htmlFor=''>
          {errors}
        </label>
      )}
    </div>
  );
};
