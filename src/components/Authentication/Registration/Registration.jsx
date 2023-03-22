import { useState, satState, useForm } from 'react';
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
  // ошибка если инпут пустой
  const [nameError, setNameError] = useState('Please enter your Name');
  const [emailError, setEmailError] = useState('Please enter your Email');
  const [passwordError, setPasswordError] = useState(
    'Please enter your Password'
  );
  const onChangeHandler = (fieldName, value) => {
    if (fieldName === 'name') {
      setName(value);
    } else if (fieldName === 'email') {
      setEmail(value);
    }
  };
  function emailPattern(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() == '') {
      alert('required both field');
    } else {
      alert(name + ' ' + email);
      setName('');
      setEmail('');
      setPassword('');
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
  };

  return (
    <div className='registration-form'>
      <div
        className='body'
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <div className='registration-form__exit'></div>
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
              onChangeHandler('name', e.target.value);
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
              onChangeHandler('email', e.target.value);
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
            type='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              onChangeHandler('password', e.target.value);
            }}
          />
          {passwordDirty && passwordError && (
            <div className='registration-form__text-error empty-password'>
              {passwordError}
            </div>
          )}

          <div className='password__eye-off'></div>
          <p className='password__text'>
            Must be between 6 and 10 characters long.
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
      </div>
    </div>
  );
};

export default Registration;
