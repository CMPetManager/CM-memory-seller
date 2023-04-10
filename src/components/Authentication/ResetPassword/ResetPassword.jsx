import './ResetPassword.css';
import closeWindow from 'assets/img/IconCloseWindow.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { useState } from 'react';
import { FormError } from 'components/FormError/FormError';
const ResetPassword = () => {
  const [error, setError] = useState(true);
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
    } else if (getValues('confirmpassword') != getValues('password')) {
      return 'Password mismatch';
    }
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
            label=' '
            register={register}
            placeholder='Enter your new password'
            type='password'
            visibleIcon={true}
            name='password'
            errors={errors.password?.message}
            required={{
              required: true,
              minLength: {
                value: 6,
                message: 'Must be between 6 and 25 characters long.',
              },
              maxLength: {
                value: 25,
                message: 'Must be between 6 and 25 characters long.',
              },
            }}
          />
          <Input
            label=' '
            register={register}
            placeholder='Confirm your new password'
            type='password'
            visibleIcon={true}
            name='confirmpassword'
            errors={errors.confirmpassword?.message}
            required={{
              validate: InputPassValidate,
            }}
          />
          <Button
            titleButton='Change Password'
            className={
              Object.keys(errors).length === 0 &&
              getValues('confirmpassword') &&
              getValues('password')
                ? 'submitBtnSuccess'
                : 'submitBtn'
            }
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
