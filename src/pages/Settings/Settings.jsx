import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Settings.css';

import ProfilePanel from 'components/ProfilePanel/ProfilePanel';
import EmailSettings from 'pages/Settings/components/EmailSettings/EmailSettings';
import PasswordSettings from 'pages/Settings/components/PasswordSettings/PasswordSettings';
import DeleteSettings from './components/DeleteSettings/DeleteSettings';

const Settings = () => {
  const [btnExpandState, setBtnExpandState] = useState({
    emailExpand: false,
    pswExpand: false,
    deleteExpand: false,
  });

  const [isSuccessDeletedUser, setIsSuccessDeletedUser] = useState(false);

  const onClickBtnExpand = (name) => {
    setBtnExpandState(({ emailExpand, pswExpand, deleteExpand }) => ({
      emailExpand: emailExpand ? !emailExpand : emailExpand,
      pswExpand: pswExpand ? !pswExpand : pswExpand,
      deleteExpand: deleteExpand ? !deleteExpand : deleteExpand,
      [name]: !btnExpandState[name],
    }));
  };

  const handleSuccessDeletMsg = () => {
    setIsSuccessDeletedUser(true);
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
            emailExpand={btnExpandState.emailExpand}
            onClickBtnExpand={onClickBtnExpand}
          />
          <PasswordSettings
            pswExpand={btnExpandState.pswExpand}
            onClickBtnExpand={onClickBtnExpand}
          />
          <DeleteSettings
            deleteExpand={btnExpandState.deleteExpand}
            onClickBtnExpand={onClickBtnExpand}
            handleSuccessDeletMsg={handleSuccessDeletMsg}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
