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
    if (data.password === data.confirmpassword) {
      console.log(data);
      navigate('/login');
    } else {
      alert('Passwords don`t match');
    }
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
            label=' '
            register={register}
            required
            placeholder='Enter your new password'
            type='password'
            visibleIcon={true}
            name='password'
            errors={errors.password?.message}
            textError='Enter your new password'
          />
          <Input
            label=' '
            register={register}
            required
            placeholder='Confirm your new password'
            type='password'
            visibleIcon={true}
            name='confirmpassword'
            errors={errors.confirmpassword?.message}
            textError='Your forgot confirm  new password'
          />
          <Button titleButton='Change Password' />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
