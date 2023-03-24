import { Link } from 'react-router-dom';

import './Login.css';
import imgX from '../../../assets/icons/x1.svg';
import eyeCrossed from '../../../assets/icons/eye_crossed.svg';
// import eye from '../../../assets/icons/eye.svg';

const Login = () => {
  return (
    <div className='login__wrap'>
      <div className='login__container'>
        <Link to={'..'} className='login__close'>
          <img src={imgX} alt='close button' className='login__close-icon' />
        </Link>
        <div className='login__head-wrap'>
          <h2 className='login__title'>Welcome</h2>
          <p className='error-message'>
            Either Email or Password that you entered were incorrect
          </p>
        </div>
        <form className='login__form form'>
          <fieldset className='form__input-wrap'>
            <input
              type='email'
              className='form__input'
              placeholder='Email address'
              required
            />
            <p className='error-message'>Please enter your Email</p>
          </fieldset>
          <fieldset className='form__input-wrap'>
            <label className='form__password-label'>
              <input
                type='password'
                className='form__input'
                placeholder='Password'
                required
              />
              <img
                className='form__eye'
                src={eyeCrossed}
                alt='eye crossed icon'
              />
            </label>
            <p className='error-message'>Please enter your Password</p>
          </fieldset>
          <label className='form__label'>
            <input type='checkbox' className='form__checkbox' />
            Remember me
          </label>
          <button className='btn'>Continue</button>
          <Link to={'../forgot-password'} className='forgot-link'>
            Forgot your password?
          </Link>
          <p className='form__register-text'>
            Don't have an account yet?
            <Link to={'../registration'} className='register-link'>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
