import useAuth from 'hooks/useAuth';
import { useForm } from 'react-hook-form';

import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';

import { EMAIL_REGEX } from 'constants';

const EmailSettings = ({ emailExpand, onClickEmailExpand }) => {
  const { auth } = useAuth();

  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const InputEmailRepeatValidate = (value) => {
    if (!EMAIL_REGEX.test(getValues('emailRepeat'))) {
      return 'The Email doesn’t match required criteria';
    } else if (getValues('email') !== getValues('emailRepeat')) {
      return 'Email mismatch';
    }
  };

  const onSubmitEmail = (e, data) => {
    e.preventDefault();
    if (data.email === data.emailRepeat) {
      console.log(data);
      reset();
    }
  };

  return (
    <div
      className={
        'settings__item-wrap ' + (emailExpand ? 'settings__item-wrap_gold' : '')
      }
    >
      <div className='settings__subtitle-wrap'>
        <div className='settings__subtitle-inner'>
          <h3 className='settings__subtitle'>Email settings</h3>
          <p className='settings__info-text'>{auth.email}</p>
        </div>
        <button
          className={
            'settings__btn-expand ' +
            (emailExpand ? 'btn-expand_bottom' : 'btn-expand_top')
          }
          onClick={onClickEmailExpand}
        ></button>
      </div>
      {emailExpand && (
        <form className='settings__form' onSubmit={handleSubmit(onSubmitEmail)}>
          <Input
            placeholder='Email address'
            type='text'
            {...register('email', {
              required: 'Please enter your Email',
              pattern: {
                value: EMAIL_REGEX,
                message: 'The Email doesn’t match required criteria',
              },
            })}
            errors={errors.email?.message}
          />
          <Input
            placeholder='Email address repeat'
            type='text'
            {...register('emailRepeat', {
              required: 'Please confirm your Email',
              validate: InputEmailRepeatValidate,
            })}
            errors={errors.emailRepeat?.message}
          />
          <Button
            titleButton={'Change your email address'}
            className={'form__btn btn'}
            disabled={
              Object.keys(errors).length === 0 &&
              getValues('email') &&
              getValues('emailRepeat')
                ? false
                : true
            }
          />
          <p className='settings__info-text'>
            Note: When you change your email, you go to the main page
          </p>
        </form>
      )}
    </div>
  );
};

export default EmailSettings;
