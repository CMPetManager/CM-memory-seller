import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './ForgotPassword.css';

import ModalBack from '../ModalBack/ModalBack';
import { Button } from 'components/Button/Button';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const watchEmail = watch('email');

  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate('/');
  };
  return (
    <ModalBack>
      <div className='forgot-wrap'>
        <h2 className='title'>Forgot your password?</h2>
        <p className='text'>
          Don´t worry, well send you a link to get back in.
        </p>
      </div>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='form__input forgot__input'
          {...register('email', {
            required: 'Please enter your Email',
          })}
          placeholder='Email address'
        />
        {errors.email ? (
          <span className='error-message error-message_margin'>
            Please enter your Email
          </span>
        ) : null}
        <Button
          titleButton={'Request password'}
          className='btn btn__margin'
          disabled={
            Object.keys(errors).length === 0 && watchEmail ? false : true
          }
        />
      </form>
    </ModalBack>
  );
};
export default ForgotPassword;
