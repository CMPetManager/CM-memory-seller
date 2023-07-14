import { Link } from 'react-router-dom';

import './Settings.css';

import ProfilePanel from 'components/ProfilePanel/ProfilePanel';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';

const Settings = () => {
  const additionalClassBtn = 'btn-expand_top';
  return (
    <div className='settings'>
      <ProfilePanel activePage='settings' />
      <div className='settings__container'>
        <p className='settings__background'>Memories</p>
        <Link className='settings__home-link' to='/albums'>
          Home
        </Link>
        <h2 className='settings__title'>Settings</h2>

        <div className='settings__body'>
          <div className='settings__item-wrap'>
            <div className='settings__subtitle-wrap'>
              <button
                className={'settings__btn-expand ' + additionalClassBtn}
              ></button>
              <h3 className='settings__subtitle'>Email settings</h3>
              <p className='settings__user-email'>
                naol.jonah@foundtoo.com
                <span>(Verifed)</span>
              </p>
            </div>
            <div className='settings__form'>
              <Input placeholder='Email address' type='text' />
              <Input placeholder='Email address repeat' type='text' />
              <Button titleButton={'Change your email address'} />
            </div>
            <p className='settings__info-text'>
              Note: When you change your email, you go to the main page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
