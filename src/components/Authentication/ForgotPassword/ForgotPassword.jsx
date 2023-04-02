import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './ForgotPassword.css';
import imgX from '../../assets/icons/x1.svg';
const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });
  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate('/reset-password/:resetToke');
  };
  return (
    <div className='login__wrap'>
      <div className='login__container'>
        <Link to={'..'} className='login__close'>
          <img src={imgX} alt='close button' className='login__close-icon' />
        </Link>
        <div className='login__head-wrap'>
          <h2 className='login__title'>Forgot your password?</h2>
          <p className='login__subtitle'>
            Don´t worry, well send you a link to get back in.
          </p>
        </div>
        <form className='login__form form' onSubmit={handleSubmit(onSubmit)}>
          <input
            className='form__input'
            {...register('email', {
              required: 'Please enter your Password',
            })}
          />
          {errors.email && (
            <span className='form__error'>This field is required</span>
          )}
          <button className='login__submitBtn' type='submit'>
            Request password
          </button>
        </form>
      </div>
    </div>
  );
};
export default ForgotPassword;
