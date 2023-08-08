import useAuth from 'hooks/useAuth';
import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';

import { ReactComponent as HidePass } from 'assets/icons/eye_crossed.svg';
import { ReactComponent as ShowPass } from 'assets/icons/eye.svg';

import { PSW_REGEX } from 'constants';
import { clsx } from 'clsx';

const PasswordSettings = ({ pswExpand, onClickPswExpand }) => {
  const [isPassword, setIsPassword] = useState({
    password: true,
    confirmpassword: true,
  });
  const { auth } = useAuth();

  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const InputPassValidate = (value) => {
    if (!PSW_REGEX.test(value)) {
      return 'Must be between 6 and 25 characters long.';
    } else if (getValues('password') !== getValues('confirmpassword')) {
      return 'Password mismatch';
    }
  };

  const ChooseImage = (data) => {
    return isPassword[data] ? (
      <HidePass
        className='form__eye'
        onClick={() =>
          setIsPassword((prev) => ({
            ...prev,
            [data]: !isPassword[data],
          }))
        }
      />
    ) : (
      <ShowPass
        className='form__eye'
        onClick={() =>
          setIsPassword((prev) => ({
            ...prev,
            [data]: !isPassword[data],
          }))
        }
      />
    );
  };

  const onSubmitPsw = (e, data) => {
    e.preventDefault();
    if (data.password === data.confirmpassword) {
      console.log(data);
      reset();
    }
  };

  return (
    <div
      className={
        'settings__item-wrap ' + (pswExpand ? 'settings__item-wrap_gold' : '')
      }
    >
      <div className='settings__subtitle-wrap'>
        <div className='settings__subtitle-inner'>
          <h3 className='settings__subtitle'>Change password</h3>
          <p className='settings__info-text'>
            {auth.password.replace(/./g, '*')}
          </p>
        </div>
        <button
          className={
            'settings__btn-expand ' +
            (pswExpand ? 'btn-expand_bottom' : 'btn-expand_top')
          }
          onClick={onClickPswExpand}
        ></button>
      </div>
      {pswExpand && (
        <form className='settings__form' onSubmit={handleSubmit(onSubmitPsw)}>
          <fieldset className='settings__input-wrap'>
            <Input
              {...register('password', {
                required: 'Please enter new Password',
                pattern: {
                  value: PSW_REGEX,
                  message: 'Must be between 6 and 25 characters long.',
                },
              })}
              placeholder='New password'
              type={isPassword.password ? 'password' : 'text'}
              icon={ChooseImage('password')}
              errors={errors.password?.message}
              className='settings__psw-input form__input-passw'
              classNameWrap='settings__input-container'
            />
            <Input
              icon={ChooseImage('confirmpassword')}
              placeholder='Repeat password'
              type={isPassword.confirmpassword ? 'password' : 'text'}
              errors={errors.confirmpassword?.message}
              {...register('confirmpassword', {
                required: 'Please confirm new Password',
                validate: InputPassValidate,
              })}
              className='settings__psw-input form__input-passw'
              classNameWrap='settings__input-container'
            />
          </fieldset>
          <Button
            titleButton='Change your password'
            className={clsx('btn psw__btn')}
            disabled={
              Object.keys(errors).length === 0 &&
              getValues('confirmpassword') &&
              getValues('password')
                ? false
                : true
            }
          />
          <p className='settings__info-text'>
            Note: When you change your email, you go to the main page
          </p>
        </form>
      )}
    </div>
  );
};

export default PasswordSettings;
