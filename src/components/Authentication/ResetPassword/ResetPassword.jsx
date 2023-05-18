import './ResetPassword.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { useState } from 'react';
import { FormError } from 'components/FormError/FormError';
import { clsx } from 'clsx';

import { ReactComponent as HidePass } from 'assets/icons/eye_crossed.svg';
import { ReactComponent as ShowPass } from 'assets/icons/eye.svg';
import ModalBack from '../ModalBack/ModalBack';

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

  return error ? (
    <ModalBack>
      <div className='resetPassword-wrap'>
        <h2 className='title'>Reset your password</h2>
      </div>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
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
          className='form__input-passw'
        />
        <Input
          icon={ChooseImage('confirmpassword')}
          placeholder='Confirm your new password'
          type={isPassword.confirmpassword ? 'password' : 'text'}
          errors={errors.confirmpassword?.message}
          {...register('confirmpassword', {
            validate: InputPassValidate,
          })}
          className='form__input-passw'
        />

        <Button
          titleButton='Change Password'
          className={clsx(' btn resetPassword__btn')}
          disabled={
            Object.keys(errors).length === 0 &&
            getValues('confirmpassword') &&
            getValues('password')
              ? false
              : true
          }
        />
      </form>
    </ModalBack>
  ) : (
    <FormError
      textLabel='Password changed successfully!'
      titleButton='Continue'
      buttonOnClick={() => navigate('/login')}
    />
  );
};

export default ResetPassword;
