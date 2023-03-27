/* eslint-disable default-case */
import { useState } from 'react';
import './Registration.css';

const Registration = (props) => {
  // состояние, которое по умолчанию  есть пустой строкой
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  const [nameError, setNameError] = useState('Please enter your Name');
  const [emailError, setEmailError] = useState('Please enter your Email');
  const [passwordError, setPasswordError] = useState(
    'Please enter your Password'
  );
  // let passwordText = 'Must be between 6 and 10 characters long.';
  // let passwordText1 = passwordText == null;
  const [passwordTextHidden, setpasswordTextHidden] = useState(
    'Must be between 6 and 10 characters long.'
  );
  // const hiddenText = (e) => {
  //   {
  //     passwordTextHidden;
  //   }
  //   if (setPasswordError()) {
  //     passwordTextHidden(null);
  //   }
  // };
  // ошибка: не соответствует критериям
  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 1 || e.target.value.length > 64) {
      setNameError('The Name doesn’t match required criteria');
    } else {
      setNameError('');
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('The Email doesn’t match required criteria');
    } else {
      setEmailError('');
    }
  };

  const passwordHendler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6 || e.target.value.length > 64) {
      setPasswordError('The password doesn’t match required criteria');
    } else {
      setPasswordError('');
    }
  };

  const blurHundler = (e) => {
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
        <h1 className='body__title'>Welcome</h1>
        <div className='user-name'>
          <input
            onBlur={(e) => blurHundler(e)}
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
          {nameDirty && nameError && (
            <div className='registration-form__text-error empty-name'>
              {nameError}
            </div>
          )}
        </div>
        <div className='email'>
          <input
            onBlur={(e) => blurHundler(e)}
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
          {emailDirty && emailError && (
            <div className='registration-form__text-error empty-email'>
              {emailError}
            </div>
          )}
        </div>
        <div className='password'>
          <input
            onBlur={(e) => blurHundler(e)}
            name='password'
            className='password__input input_form'
            type={passwordShown ? 'text' : 'password'}
            id='password'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              passwordHendler(e);
              setPassword(e.target.value);
            }}
          />
          {passwordDirty && passwordError && (
            <div className='registration-form__text-error empty-password'>
              {passwordError}
            </div>
          )}

          <button
            className='password__eye-off'
            onClick={togglePassword}
          ></button>
          <p className='password__text password__text_hidden'>
            {/* Must be between 6 and 10 characters long. */}
            {/* {passwordTextHidden(e.targer.value)} */}
          </p>
        </div>
        <div className='confirm'>
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
