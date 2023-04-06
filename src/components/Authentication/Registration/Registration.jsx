/* eslint-disable default-case */
import { useState } from 'react';
import './Registration.css';

const Registration = (props) => {
  // состояние, которое по умолчанию  есть пустой строкой
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // отправка формы, но куда ее отправлять?

  // состояние в котором значится нахождение юзера в инпуте
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  // отображение пароля
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  // ошибка если инпут пустой
  const [nameEmptyError, setNameEmptyError] = useState(
    'Please enter your Name'
  );
  const [emailEmptyError, setEmailEmptyError] = useState(
    'Please enter your Email'
  );
  const [passwordError, setPasswordError] = useState(false);

  const passwordText = 'Must be between 6 and 25 characters long.';

  // ошибка: не соответствует критериям
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
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailEmptyError('The Email doesn’t match required criteria');
    } else {
      setEmailEmptyError('');
    }
  };

  const passwordHendler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length <= 6 || e.target.value.length > 25) {
      setPasswordError('The password doesn’t match required criteria');
    } else if (e.target.value.length === ' ') {
      setPasswordError('Please enter your Password');
    } else {
      setPasswordError(false);
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
    }
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
    }
    switch (e.target.name) {
      case 'password':
        setPasswordDirty(true);
        break;
    }
    // no default
  };

  return (
    <div className='registration-form'>
      <form className='registration-form__body'>
        <div>
          {' '}
          <a href='../'>
            <div className='registration-form__exit'></div>
          </a>
        </div>
        <h1 className='registration-form__title'>Welcome</h1>

        <div className='registration-form__input '>
          <div>
            <input
              onBlur={(e) => blurHandler(e)}
              name='name'
              id='name'
              type='text'
              className='input__user-name input_form'
              placeholder='Name'
              value={name}
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
              id='email'
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
              onBlur={blurHandler}
              name='password'
              className='input__password input_form'
              type={passwordShown ? 'text' : 'password'}
              id='password'
              placeholder='Password'
              value={password}
              onChange={(e) => {
                setPasswordError(e);
                passwordHendler(e);
              }}
            />
            <div className='input__text-error empty-password'>
              {/* {passwordError} */}
            </div>
            {/* {passwordDirty && passwordError && (
              <div className='input__text-error empty-password'>
                {passwordError}
              </div>
            )} */}
            <button
              type='button'
              className='input__password_eye-off'
              onClick={togglePassword}
            ></button>
            <p className='input__text password__text_hidden'>
              {passwordError ? passwordError : passwordText}
            </p>
          </div>
        </div>

        <div>
          <a href='../' type='submit' className='input__confirm-btn'>
            <span className='input__confirm-text'>Confirm</span>
          </a>

          <p className='confirm__text-log'>
            Already registered?{' '}
            <a href='/login' className='confirm__text-log_green'>
              Sign In
            </a>
          </p>
        </div>
        <div>
          <p className='body__warning-footer'>
            By creating an account, I accept (Name page) Terms and Privacy
            statement
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
