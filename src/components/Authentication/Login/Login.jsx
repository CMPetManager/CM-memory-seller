import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './Login.css';
import imgX from '../../../assets/icons/x1.svg';
import eyeCrossed from '../../../assets/icons/eye_crossed.svg';
import eye from '../../../assets/icons/eye.svg';

import { loginUser } from '../../../services/users/userService';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errorMsg, setErrorMsg] = useState({
    isErrorEmail: false,
    isErrorPsw: false,
    isErrorResponse: false,
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isShownPassword, setShownPassword] = useState(false);

  useEffect(() => {
    if (form.email && errorMsg.isErrorEmail) {
      setErrorMsg((prev) => ({
        ...prev,
        isErrorEmail: false,
      }));
    }
  }, [form.email]);

  useEffect(() => {
    if (form.password && errorMsg.isErrorPsw) {
      setErrorMsg((prev) => ({
        ...prev,
        isErrorPsw: false,
      }));
    }
  }, [form.password]);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    const { isErrorEmail, isErrorPsw } = errorMsg;

    if (errorMsg.isErrorResponse) {
      setErrorMsg((prev) => ({
        ...prev,
        isErrorResponse: false,
      }));
    }
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'email' && !value && !isErrorEmail) {
      setErrorMsg((prev) => ({
        ...prev,
        isErrorEmail: true,
      }));
    }
    if (name === 'password' && !value && !isErrorPsw) {
      setErrorMsg((prev) => ({
        ...prev,
        isErrorPsw: true,
      }));
    }
  };

  const onCheckedChange = () => {
    setIsChecked((prev) => !prev);
  };

  const onShowPassword = () => {
    setShownPassword((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;

    if (!form.email || !form.password) {
      return;
    }
    try {
      const response = await loginUser(email, password);

      console.log(response);
    } catch (error) {
      if (!error.successful) {
        setErrorMsg((prev) => ({
          ...prev,
          isErrorResponse: true,
        }));

        setForm({
          email: '',
          password: '',
        });
      }
    }
  };

  return (
    <div className='login__wrap'>
      <div className='login__container'>
        <Link to={'..'} className='login__close'>
          <img src={imgX} alt='close button' className='login__close-icon' />
        </Link>
        <div className='login__head-wrap'>
          <h2 className='login__title'>Welcome</h2>
          <p
            className={
              errorMsg.isErrorResponse
                ? 'error-message error-message_show'
                : 'error-message'
            }
          >
            Either Email or Password that you entered were incorrect
          </p>
        </div>
        <form className='login__form form' onSubmit={onSubmit}>
          <fieldset className='form__input-wrap'>
            <input
              type='email'
              className='form__input'
              placeholder='Email address'
              value={form.email}
              name='email'
              onChange={onInputChange}
              autoFocus
              required
            />
            <p
              className={
                errorMsg.isErrorEmail
                  ? 'error-message error-message_show'
                  : 'error-message'
              }
            >
              Please enter your Email
            </p>
          </fieldset>
          <fieldset className='form__input-wrap'>
            <label className='form__password-label'>
              <input
                type={isShownPassword ? 'text' : 'password'}
                className='form__input'
                placeholder='Password'
                value={form.password}
                name='password'
                onChange={onInputChange}
                required
              />
              <img
                onClick={onShowPassword}
                className='form__eye'
                src={isShownPassword ? eye : eyeCrossed}
                alt='eye icon'
              />
            </label>
            <p
              className={
                errorMsg.isErrorPsw
                  ? 'error-message error-message_show'
                  : 'error-message'
              }
            >
              Please enter your Password
            </p>
          </fieldset>
          <label className='form__label'>
            <input
              type='checkbox'
              className='form__checkbox'
              checked={isChecked}
              onChange={onCheckedChange}
              name='isChecked'
            />
            Remember me
          </label>
          <button className='btn' type='submit'>
            Continue
          </button>
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
