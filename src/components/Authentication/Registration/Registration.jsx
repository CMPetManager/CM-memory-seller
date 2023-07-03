/* eslint-disable default-case */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'api/axios';
import './Registration.css';

import eyeOff from 'assets/icons/eye_crossed.svg';
import eyeOpen from 'assets/icons/eye.svg';

import ModalBack from '../ModalBack/ModalBack';
import { FormError } from 'components/FormError/FormError';

import { confirmInfoMsg } from 'constants';

const USER_REGEX = /^[A-z0-9-_]{2,24}$/;
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PSW_REGEX = /^[A-z0-9-_]{6,25}$/;
const REGISTER_URL = '/users/confirm-account';

const Registration = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [passwordShown, setPasswordShown] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [nameEmptyError, setNameEmptyError] = useState(
    'Please enter your Name'
  );
  const [emailEmptyError, setEmailEmptyError] = useState(
    'Please enter your Email'
  );

  const nameHandler = (e) => {
    setName(e.target.value);
    if (!USER_REGEX.test(e.target.value)) {
      setNameEmptyError('The Name doesn’t match required criteria');
    } else {
      setNameEmptyError('');
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);

    if (!EMAIL_REGEX.test(String(e.target.value).toLowerCase())) {
      setEmailEmptyError('The Email doesn’t match required criteria');
    } else {
      setEmailEmptyError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  const msgClickHandler = () => {
    navigate('/login');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    const validName = USER_REGEX.test(name);
    const validEmail = EMAIL_REGEX.test(email);
    const validPsw = PSW_REGEX.test(password);

    if (!validName || !validEmail || !validPsw) {
      console.log('no valide');
      return;
    }

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ name, email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      console.log(JSON.stringify(response));
      console.log('Success');

      setSuccess(true);
    } catch (err) {
      if (!err.response) {
        console.log('No Server Response');
      } else {
        console.log(err.message);
        console.log(err.response.status);
      }
    }
    setName('');
    setEmail('');
    setPassword('');
  };

  const ErrorPasswMsg = () => {
    return (
      <>
        {password.length === 0 && passwordDirty ? (
          <p className='error-message error-message_margin'>
            {'Please enter your Password'}
          </p>
        ) : (password.length > 0 && password.length < 6) ||
          password.length > 25 ? (
          <p className='error-message error-message_margin'>
            {'The password doesn’t match required criteria'}
          </p>
        ) : (
          <p className='text error-message_margin'>
            {'Must be between 6 and 25 characters long.'}
          </p>
        )}
      </>
    );
  };

  return (
    <>
      {success ? (
        <FormError {...confirmInfoMsg} buttonOnClick={msgClickHandler} />
      ) : (
        <ModalBack>
          <div className='form__head-wrap'>
            <h2 className='title'>Welcome</h2>
            <p
              className={
                errorMsg
                  ? 'error-message error-message_margin'
                  : 'error-message error-message_margin error-message_hidden'
              }
            >
              This email already exists.
              {<ResponseError />}
              to reset password
            </p>
          </div>
          <form className='form' onSubmit={onSubmit}>
            <div className='form__input-wrap'>
              <input
                onBlur={(e) => blurHandler(e)}
                name='name'
                type='text'
                className='form__input'
                placeholder='Name'
                value={name}
                onChange={(e) => {
                  nameHandler(e);
                }}
                required
              />
              <p
                className={
                  nameDirty && nameEmptyError
                    ? 'error-message error-message_margin'
                    : 'error-message error-message_margin error-message_hidden'
                }
                style={!nameEmptyError ? { marginBottom: '1.8235vw' } : null}
              >
                {nameEmptyError}
              </p>
            </div>
            <div className='form__input-wrap'>
              <input
                onBlur={(e) => blurHandler(e)}
                name='email'
                type='text'
                className='form__input'
                placeholder='Email address'
                value={email}
                onChange={(e) => {
                  emailHandler(e);
                }}
                required
              />
              <p
                style={!emailEmptyError ? { marginBottom: '1.8235vw' } : null}
                className={
                  emailDirty && emailEmptyError
                    ? 'error-message error-message_margin'
                    : 'error-message error-message_margin error-message_hidden'
                }
              >
                {emailEmptyError}
              </p>
            </div>
            <div className='form__input-wrap'>
              <div className='form__input-container'>
                <input
                  onBlur={blurHandler}
                  name='password'
                  className='form__input form__input-passw '
                  type={passwordShown ? 'text' : 'password'}
                  placeholder='Password'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <img
                  onClick={togglePassword}
                  className='form__eye'
                  src={passwordShown ? eyeOpen : eyeOff}
                  alt='eye icon'
                />
              </div>
              {<ErrorPasswMsg />}
            </div>
            <button
              type='submit'
              className='btn register__btn'
              disabled={
                name &&
                email &&
                password.length > 5 &&
                password.length <= 25 &&
                !nameEmptyError &&
                !emailEmptyError
                  ? false
                  : true
              }
            >
              Confirm
            </button>
          </form>

          <p className='text register__text'>
            Already registered?{' '}
            <Link to={'/login'} className='link__green'>
              Log In
            </Link>
          </p>

          <p className='text terms-text'>
            By creating an account, I accept (Name page) Terms and Privacy
            statement
          </p>
        </ModalBack>
      )}
    </>
  );
};

const ResponseError = () => {
  return (
    <Link to={'/forgot-password'} className='link__forgot'>
      Click here
    </Link>
  );
};
export default Registration;
