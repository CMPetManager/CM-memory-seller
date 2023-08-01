import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Settings.css';

import ProfilePanel from 'components/ProfilePanel/ProfilePanel';
import EmailSettings from 'components/EmailSettings/EmailSettings';
import PasswordSettings from 'components/PasswordSettings/PasswordSettings';

const Settings = () => {
  const [emailExpand, setEmailExpand] = useState(false);
  const [pswExpand, setPswExpand] = useState(false);

  const onClickEmailExpand = () => {
    setEmailExpand((prev) => !prev);
  };

  const onClickPswExpand = () => {
    setPswExpand((prev) => !prev);
  };

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
          <EmailSettings
            emailExpand={emailExpand}
            onClickEmailExpand={onClickEmailExpand}
          />
          <PasswordSettings
            pswExpand={pswExpand}
            onClickPswExpand={onClickPswExpand}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
