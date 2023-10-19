import { useEffect, useState } from 'react';

import { Button } from 'components/Button/Button';
import { MessageForm } from 'components/MessageForm/MessageForm';
import { FormError } from 'components/FormError/FormError';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import useAuth from 'hooks/useAuth';

const DeleteSettings = ({
  deleteExpand,
  onClickBtnExpand,
  handleSuccessChange,
}) => {
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [isOpenedMsgWindow, setIsOpenedMsgWindow] = useState(false);
  const [isErrorResponse, setIsErrorResponse] = useState(false);

  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const handleOpenMsgWindow = () => {
    setIsOpenedMsgWindow((prev) => !prev);
  };

  const handleDeletingAccount = () => {
    setDeleteAccount(true);
    handleOpenMsgWindow();
  };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const { userId } = auth;

    const deleteUserAccount = async () => {
      try {
        console.log(controller.signal);
        const response = await axiosPrivate.delete(`users/${userId}`, {
          signal: controller.signal,
        });
        console.log(response.data);

        if (response.data) {
          handleSuccessChange('delete');
          localStorage.removeItem('user');
          localStorage.removeItem('persist');
        }
      } catch (err) {
        console.log(err);
        setIsErrorResponse(true);
      }
    };

    if (deleteAccount) {
      deleteUserAccount();
    }

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [deleteAccount]);

  return !isOpenedMsgWindow ? (
    <div
      className={
        'settings__item-wrap ' +
        (deleteExpand ? 'settings__item-wrap_gold' : '')
      }
    >
      <div
        className='settings__subtitle-wrap'
        onClick={() => onClickBtnExpand('deleteExpand')}
      >
        <div className={deleteExpand ? 'settings__subtitle-inner' : ''}>
          <h3 className='settings__subtitle'>Delete your account</h3>
          <p className='settings__info-text'>
            If you need to delete your account
          </p>
        </div>
        <button
          className={
            'settings__btn-expand ' +
            (deleteExpand ? 'btn-expand_bottom' : 'btn-expand_top')
          }
          onClick={() => onClickBtnExpand('deleteExpand')}
        ></button>
      </div>
      {deleteExpand && (
        <>
          <Button
            titleButton={'Delete your account'}
            className={'form__btn btn'}
            onClick={handleOpenMsgWindow}
          />
          <p className='settings__info-text'>
            Note: When you delete your account, you go to the main page
          </p>
        </>
      )}
    </div>
  ) : isErrorResponse ? (
    <FormError
      textLabel={'Oops! something went wrong'}
      titleButton='Confirm'
      buttonOnClick={setIsErrorResponse}
    />
  ) : (
    <MessageForm
      setIsOpen={setIsOpenedMsgWindow}
      textLabel='Are you sure you want to delete your account?'
      buttonOnClick={handleDeletingAccount}
    />
  );
};

export default DeleteSettings;
