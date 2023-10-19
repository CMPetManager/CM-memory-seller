import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Settings.css';
import useLogout from 'hooks/useLogout';

import ProfilePanel from 'components/ProfilePanel/ProfilePanel';
import EmailSettings from 'pages/Settings/components/EmailSettings/EmailSettings';
import PasswordSettings from 'pages/Settings/components/PasswordSettings/PasswordSettings';
import DeleteSettings from './components/DeleteSettings/DeleteSettings';
import { FormError } from 'components/FormError/FormError';

const formData = {
  email: {
    textLabel: 'Email address updated',
    description:
      'Your new email address has been successfully updated. Check your email box and confirm new address.',
  },
  password: {
    textLabel: 'Your password was change',
    description: 'Now log in to your account with the new data',
  },
  delete: {
    textLabel: 'Your account was deleted',
    description:
      'Note: All your data has been completely removed from our system, and you can create a new account at any time.',
  },
};

const Settings = () => {
  const [btnExpandState, setBtnExpandState] = useState({
    emailExpand: false,
    pswExpand: false,
    deleteExpand: false,
  });
  const [type, setType] = useState('');
  const [isOpenedMsgWindow, setIsOpenedMsgWindow] = useState(false);
  const logOut = useLogout();

  const handleOpenInfoModal = () => {
    setIsOpenedMsgWindow((prev) => !prev);
  };

  const handleConfirmMsg = () => {
    handleOpenInfoModal();
    logOut();
  };

  const onClickBtnExpand = (name) => {
    setBtnExpandState(({ emailExpand, pswExpand, deleteExpand }) => ({
      emailExpand: emailExpand ? !emailExpand : emailExpand,
      pswExpand: pswExpand ? !pswExpand : pswExpand,
      deleteExpand: deleteExpand ? !deleteExpand : deleteExpand,
      [name]: !btnExpandState[name],
    }));
  };

  const handleSuccessChange = (type) => {
    setType(type);
    handleOpenInfoModal();
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
            handleSuccessChange={handleSuccessChange}
          />
          <PasswordSettings
            pswExpand={btnExpandState.pswExpand}
            onClickBtnExpand={onClickBtnExpand}
            handleSuccessChange={handleSuccessChange}
          />
          <DeleteSettings
            deleteExpand={btnExpandState.deleteExpand}
            onClickBtnExpand={onClickBtnExpand}
            handleSuccessChange={handleSuccessChange}
          />
        </div>
      </div>
      {isOpenedMsgWindow && (
        <FormError
          textLabel={formData[type].textLabel}
          titleButton='Confirm'
          buttonOnClick={handleConfirmMsg}
        >
          <p className='settings__info-text'>{formData[type].description}</p>
        </FormError>
      )}
    </div>
  );
};

export default Settings;
