import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './Login.css';
import imgX from 'assets/icons/x1.svg';
import eyeCrossed from 'assets/icons/eye_crossed.svg';
import eye from 'assets/icons/eye.svg';

import { loginUser } from 'services/users/userService';

const Login = () => {
  const navigate = useNavigate();
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
  }, [form.email, errorMsg.isErrorEmail]);

  useEffect(() => {
    if (form.password && errorMsg.isErrorPsw) {
      setErrorMsg((prev) => ({
        ...prev,
        isErrorPsw: false,
      }));
    }
  }, [form.password, errorMsg.isErrorPsw]);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    const { isErrorEmail, isErrorPsw, isErrorResponse } = errorMsg;

    if (isErrorResponse) {
      setErrorMsg((prev) => ({
        ...prev,
        isErrorResponse: false,
      }));
    }
    setForm((prev) => ({ ...prev, [name]: value }));

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

      if (response.success) {
        const userCredentials = await response.result;
        localStorage.setItem('user', JSON.stringify(userCredentials));

        navigate('/albums');
      }
    } catch (error) {
      if (error.status === 400) {
        setErrorMsg((prev) => ({
          ...prev,
          isErrorResponse: true,
        }));

        setForm({
          email: '',
          password: '',
        });
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className='login__wrap'>
      <div className='login__container'>
        <Link to={'/'} className='login__close'>
          <img src={imgX} alt='close button' className='login__close-icon' />
        </Link>
        <div
          className='login__head-wrap'
          style={
            errorMsg.isErrorResponse
              ? { marginBottom: '1rem' }
              : { marginBottom: '2rem' }
          }
        >
          <h2 className='login__title'>Welcome</h2>
          {errorMsg.isErrorResponse && (
            <p className='error-message'>
              Either Email or Password that you entered were incorrect
            </p>
          )}
        </div>
        <form
          className='login__form form'
          onSubmit={onSubmit}
          style={
            errorMsg.isErrorEmail || errorMsg.isErrorPsw
              ? { gap: '1.5rem' }
              : { gap: '2rem' }
          }
        >
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
            {errorMsg.isErrorEmail && (
              <p className='error-message'>Please enter your Email</p>
            )}
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
            {errorMsg.isErrorPsw && (
              <p className='error-message'>Please enter your Password</p>
            )}
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
          <button
            className='btn login__btn'
            type='submit'
            disabled={form.email && form.password ? false : true}
          >
            Continue
          </button>
        </form>
        <Link to={'/forgot-password'} className='forgot-link'>
          Forgot your password?
        </Link>
        <p className='form__register-text'>
          Don't have an account yet?
          <Link to={'/registration'} className='register-link'>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
