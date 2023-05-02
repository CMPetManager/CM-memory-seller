import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './ForgotPassword.css';
import imgX from '../../../assets/icons/x1.svg';
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
    <div className='forgot__wrap'>
      <div className='forgot__container'>
        <Link to={'..'} className='forgot__close'>
          <img src={imgX} alt='close button' className='forgot__close-icon' />
        </Link>
        <div className='forgot-wrap'>
          <h2 className='forgot__title'>Forgot your password?</h2>
          <p className='forgot__subtitle'>
            Don´t worry, well send you a link to get back in.
          </p>
        </div>
        <form className='forgot__form' onSubmit={handleSubmit(onSubmit)}>
          <input
            className='form__input '
            {...register('email', {
              required: 'Please enter your Password',
            })}
          />
          {errors.email ? (
            <span className='forgot__form__error'>This field is required</span>
          ) : (
            <span className='forgot__form__error'></span>
          )}
          <button className='btn btn__margin' type='submit'>
            Request password
          </button>
        </form>
      </div>
    </div>
  );
};
export default ForgotPassword;
