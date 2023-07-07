import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './Login.css';
import eyeCrossed from 'assets/icons/eye_crossed.svg';
import eye from 'assets/icons/eye.svg';

import ModalBack from '../ModalBack/ModalBack';

import axios from 'api/axios';
import useAuth from 'hooks/useAuth';

const LOGIN_URL = '/users/login';

const Login = () => {
  const { setAuth, persist, setPersist } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/albums';
  console.log(from);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errorMsg, setErrorMsg] = useState({
    isErrorEmail: false,
    isErrorPsw: false,
    isErrorResponse: '',
  });

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
        isErrorResponse: '',
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

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem('persist', persist);
  }, [persist]);

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
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(JSON.stringify(response));
      console.log(JSON.stringify(response?.data));

      if (response.ok) {
        const {
          userId,
          name,
          token: { accessToken, refreshToken },
        } = response.data;

        console.log(userId, name, accessToken, refreshToken);

        const userCredentials = {
          userId,
          name,
          accessToken,
          refreshToken,
          email,
        };

        setAuth({ userId, name, accessToken, refreshToken, email, password });
        persist &&
          localStorage.setItem('user', JSON.stringify(userCredentials));

        //!NEED TO TEST
        // navigate('/albums');

        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error(error);
      // if (!error?.response) {
      //   setErrorMsg((prev) => ({
      //     ...prev,
      //     isErrorResponse: 'No Server Response',
      //   }));
      // } else if (error.response?.status === 400) {
      //   setErrorMsg((prev) => ({
      //     ...prev,
      //     isErrorResponse:
      //       'Either Email or Password that you entered were incorrect',
      //   }));
      // } else {
      //   setErrorMsg((prev) => ({
      //     ...prev,
      //     isErrorResponse: error.message,
      //   }));
      // }
    }
    setForm({
      email: '',
      password: '',
    });
  };

  return (
    <ModalBack>
      <div
        className='form__head-wrap'
        style={
          errorMsg.isErrorResponse
            ? { marginBottom: '1.4275vw' }
            : { marginBottom: '2.73vw' }
        }
      >
        <h2 className='title'>Welcome</h2>
        {errorMsg.isErrorResponse && (
          <p className='error-message'>{errorMsg.isErrorResponse}</p>
        )}
      </div>
      <form className='form' onSubmit={onSubmit}>
        <fieldset className='form__input-wrap'>
          <input
            type='email'
            className='form__input login__form-input'
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
                ? 'error-message error-message_margin'
                : 'error-message error-message_margin error-message_hidden'
            }
          >
            Please enter your Email
          </p>
        </fieldset>
        <fieldset className='form__input-wrap'>
          <div className='form__input-container'>
            <input
              type={isShownPassword ? 'text' : 'password'}
              className='form__input login__form-input form__input-passw'
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
          </div>
          <p
            className={
              errorMsg.isErrorPsw
                ? 'error-message error-message_margin'
                : 'error-message error-message_margin error-message_hidden'
            }
          >
            Please enter your Password
          </p>
        </fieldset>
        <label className='form__label'>
          <input
            type='checkbox'
            className='form__checkbox'
            checked={persist}
            onChange={togglePersist}
            name='rememberme'
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
        <Link to={'/registration'} className='link__green'>
          Register
        </Link>
      </p>
    </ModalBack>
  );
};
export default Login;
