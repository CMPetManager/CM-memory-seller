import './ResetPassword.css';
import closeWindow from 'assets/img/IconCloseWindow.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { useState } from 'react';
import { FormError } from 'components/FormError/FormError';
import { clsx } from 'clsx';

import { ReactComponent as HidePass } from 'assets/img/IconHidePass.svg';
import { ReactComponent as ShowPass } from 'assets/img/IconShowPass.svg';
const ResetPassword = () => {
  const [error, setError] = useState(true);
  const [isPassword, setIsPassword] = useState({
    password: true,
    confirmpassword: true,
  });
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    if (data.password === data.confirmpassword) {
      console.log(data);
      setError(false);
      reset();
    }
  };
  const InputPassValidate = (value) => {
    if (value.length < 6 || value.length > 25) {
      return 'Must be between 6 and 25 characters long.';
    } else if (getValues('confirmpassword') !== getValues('password')) {
      return 'Password mismatch';
    }
  };
  const ChooseImage = (data) => {
    return isPassword[data] ? (
      <HidePass
        className='image_eye'
        onClick={() =>
          setIsPassword((prev) => ({
            ...prev,
            [data]: !isPassword[data],
          }))
        }
      />
    ) : (
      <ShowPass
        className='image_eye'
        onClick={() =>
          setIsPassword((prev) => ({
            ...prev,
            [data]: !isPassword[data],
          }))
        }
      />
    );
  };

  return error ? (
    <div className='resetPassword__wrap'>
      <div className='resetPassword__container'>
        <Link to={'/'} className='resetPassword__close'>
          <img
            src={closeWindow}
            alt='close button'
            className='forgot__close-icon'
          />
        </Link>
        <div className='resetPassword-wrap'>
          <h2 className='resetPassword__title'>Reset your password</h2>
        </div>
        <form className='resetPassword__form' onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Must be between 6 and 25 characters long.',
              },
              maxLength: {
                value: 25,
                message: 'Must be between 6 and 25 characters long.',
              },
            })}
            placeholder='Enter your new password'
            type={isPassword.password ? 'password' : 'text'}
            icon={ChooseImage('password')}
            errors={errors.password?.message}
          />
          <Input
            icon={ChooseImage('confirmpassword')}
            placeholder='Confirm your new password'
            type={isPassword.confirmpassword ? 'password' : 'text'}
            errors={errors.confirmpassword?.message}
            {...register('confirmpassword', {
              validate: InputPassValidate,
            })}
          />

          <Button
            titleButton='Change Password'
            className={clsx(
              'submitBtn',
              Object.keys(errors).length === 0 &&
                getValues('confirmpassword') &&
                getValues('password')
                ? 'submitBtnActive'
                : 'submitBtnPassive'
            )}
          />
        </form>
      </div>
    </div>
  ) : (
    <FormError
      textLabel='New data saved'
      titleButton='Login'
      buttonOnClick={() => navigate('/login')}
    />
  );
};

export default ResetPassword;
