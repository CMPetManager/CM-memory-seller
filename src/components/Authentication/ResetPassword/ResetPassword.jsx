import './ResetPassword.css';
import closeWindow from '../../assets/img/IconCloseWindow.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
const ResetPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className='resetPassword__wrap'>
      <div className='resetPassword__container'>
        <Link to={'..'} className='resetPassword__close'>
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
              // required: 'errors',
            })}
            placeholder={'ddddd'}
            type='password'
            label={'label'}
            visibleIcon={true}
            errors={errors && errors.password?.message}
          />
          <Input
            {...register('confirmPassword', {
              // required: 'Please enter your Password',
            })}
            placeholder={'ddddd'}
            type='email'
            label={'email label'}
            errors={errors && errors.confirmPassword?.message}
          />
          <Button titleButton='Change Password' />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
