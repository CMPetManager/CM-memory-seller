/* eslint-disable default-case */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';
import eyeOff from '../../../assets/icons/eye_crossed.svg';
import eyeOpen from '../../../assets/icons/eye.svg';

const Registration = (props) => {
  const [nameInput, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);

  const [passwordShown, setPasswordShown] = useState(false);

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
    if (e.target.value.length < 1 || e.target.value.length > 25) {
      setNameEmptyError('The Name doesn’t match required criteria');
    } else {
      setNameEmptyError('');
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const regul =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regul.test(String(e.target.value).toLowerCase())) {
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
    }
  };
  const submissionForm = () => {
    console.log(nameInput, email, password);
  };

  return (
    <div className='wraper'>
      <div className='registration-form'>
        <div className='registration-form__body'>
          <div>
            <Link to='../'>
              <div className='registration-form__exit'></div>
            </Link>
          </div>
          <h1 className='registration-form__title'>Welcome</h1>
          <div className='registration-form__email-already-exists'></div>
          <div className='registration-form__input '>
            <div>
              <input
                onBlur={(e) => blurHandler(e)}
                name='name'
                type='text'
                className='input__user-name input_form'
                placeholder='Name'
                value={nameInput}
                onChange={(e) => {
                  nameHandler(e);
                  setName(e.target.value);
                }}
              ></input>
              {nameDirty && nameEmptyError && (
                <div className='input__text-error empty-name'>
                  {nameEmptyError}
                </div>
              )}
            </div>
            <div>
              <input
                onBlur={(e) => blurHandler(e)}
                name='email'
                type='text'
                className='input__email input_form'
                placeholder='Email address'
                value={email}
                onChange={(e) => {
                  emailHandler(e);
                  setEmail(e.target.value);
                }}
              ></input>
              {emailDirty && emailEmptyError && (
                <div className='input__text-error empty-email'>
                  {emailEmptyError}
                </div>
              )}
            </div>
            <div>
              <input
                name='password'
                className='input__password input_form'
                type={passwordShown ? 'text' : 'password'}
                placeholder='Password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className='input__text-error empty-password'></div>
              {password.length === ' ' ? (
                <div className='input__text-error empty-password'>
                  {'Please enter your Password'}
                </div>
              ) : (password.length > 0) & (password.length <= 6) ? (
                <div className='input__text-error empty-password'>
                  {'The password doesn’t match required criteria'}
                </div>
              ) : password.length >= 25 ? (
                <div className='input__text-error empty-password'>
                  {'The password doesn’t match required criteria'}
                </div>
              ) : (
                <div className='input__text password__text_hidden'>
                  {'Must be between 6 and 25 characters long.'}
                </div>
              )}
              <div>
                <img
                  src={passwordShown ? eyeOpen : eyeOff}
                  alt='eye off'
                  className='input__password_eye-off'
                  onClick={togglePassword}
                ></img>
              </div>

              <p className='input__text password__text_hidden'></p>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='input__confirm-btn'
              onClick={() => {
                submissionForm();
                setName('');
                setEmail('');
                setPassword('');
              }}
            >
              <span className='input__confirm-text'>Confirm</span>
            </button>

            <p className='confirm__text-log'>
              Already registered?{' '}
              <Link to={'/login'} className='confirm__text-log_green'>
                Sign In
              </Link>
            </p>
          </div>
          <div>
            <p className='body__warning-footer'>
              By creating an account, I accept (Name page) Terms and Privacy
              statement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
