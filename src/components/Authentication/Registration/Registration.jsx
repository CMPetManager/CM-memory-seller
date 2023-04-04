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
  const [passwordEmptyError, setPasswordEmptyError] = useState(
    'Please enter your Password'
  );
  const [passwordError, setPasswordError] = useState(false);
  const emptyPassword = () => {
    if (passwordError === ' ') {
      setPasswordError('Please enter your Email');
    } else {
      setPasswordError(false);
    }
  };
  const [passwordTextHidden, setPasswordTextHidden] = useState(
    'Must be between 6 and 10 characters long.'
  );
  const textHidden = () => {
    if (passwordError) {
      setPasswordTextHidden(false);
    } else {
      setPasswordTextHidden('Must be between 6 and 10 characters long.');
    }
  };
  // ошибка: не соответствует критериям
  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 1 || e.target.value.length > 64) {
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
    if (e.target.value.length <= 6 || e.target.value.length > 64) {
      setPasswordError('The password doesn’t match required criteria');
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
        <div className='registration-form__input user-name'>
          <input
            onBlur={(e) => blurHandler(e)}
            name='name'
            id='name'
            type='text'
            className='user-name__input input_form'
            placeholder='Name'
            value={name}
            onChange={(e) => {
              nameHandler(e);
              setName(e.target.value);
            }}
          ></input>
          {nameDirty && nameEmptyError && (
            <div className='registration-form__text-error empty-name'>
              {nameEmptyError}
            </div>
          )}
        </div>
        <div className='registration-form__exit email'>
          <input
            onBlur={(e) => blurHandler(e)}
            name='email'
            id='email'
            type='text'
            className='email__input input_form'
            placeholder='Email address'
            value={email}
            onChange={(e) => {
              emailHandler(e);
              setEmail(e.target.value);
            }}
          ></input>
          {emailDirty && emailEmptyError && (
            <div className='registration-form__text-error empty-email'>
              {emailEmptyError}
            </div>
          )}
        </div>
        <div className='registration-form__exit password'>
          <input
            onBlur={blurHandler}
            name='password'
            className='password__input input_form'
            type={passwordShown ? 'text' : 'password'}
            id='password'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              emptyPassword();
              setPasswordError(e);
              passwordHendler(e);
              textHidden();
            }}
          />
          <div className='registration-form__text-error empty-password'>
            {passwordError}
          </div>
          {passwordDirty && passwordEmptyError && (
            <div className='registration-form__text-error empty-password'>
              {passwordEmptyError}
            </div>
          )}

          <button
            type='button'
            className='password__eye-off'
            onClick={togglePassword}
          ></button>
          <p className='password__text password__text_hidden'>
            {passwordTextHidden}
          </p>
        </div>
        <div className='registration-form__confirm confirm'>
          <button type='submit' className='confirm__btn'>
            <span className='confirm__text-btn'>Confirm</span>
          </button>

          <p className='confirm__text-log'>
            Already registered?{' '}
            <a href='/login' className='confirm__text-log_green'>
              Sign In
            </a>
          </p>
        </div>
        <div>
          <p className='registration-form__warning-footer'>
            By creating an account, I accept (Name page) Terms and Privacy
            statement
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
