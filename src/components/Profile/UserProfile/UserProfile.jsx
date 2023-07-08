/* eslint-disable jsx-a11y/img-redundant-alt */
import './UserProfile.css';
import ProfilePanel from '../ProfilePanel/ProfilePanel';
import profilePhoto from 'assets/icons/profile_photo.svg';
import addPhoto from 'assets/icons/Add-photo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserProfile = () => {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };
  const onUploadFile = (e) => {
    e.preventDefault();
    console.log('change', e.target.files);
    setImage(e.target.files[0]);
    fileReader.readAsDataURL(e.target.files[0]);
  };
  const userName = 'Sandström';
  return (
    <div className='profile'>
      <ProfilePanel />
      <div className='profile__body'>
        <p className='profile__background profile__background_higher'>
          Catch the
        </p>
        <p className='profile__background profile__ background_below'>Moment</p>
        <Link className='profile__home-link' to='/albums'>
          Home
        </Link>

        <div className='profile__user'>
          <div className='profile__user-photo'>
            <input
              className='profile__user-photo_hiden'
              type='file'
              accept='.jpeg, .png, .jpg, heic'
              onChange={onUploadFile}
            />
            <img
              src={imageURL ? imageURL : profilePhoto}
              alt='profile photo'
              className='profile__user-photo_user'
            />
            <img
              src={addPhoto}
              alt='add photo'
              className='profile__user-photo_add-photo'
            />
          </div>

          <div className='profile__user-name'>
            <h2>{userName}</h2>
            <h3>Free account</h3>
          </div>
          <div className='profile__inputs'>
            <input
              name='name'
              type='text'
              disabled
              placeholder={userName}
              className='input form__input'
            />
            <input
              name='email'
              placeholder='Email address'
              type='text'
              disabled
              className='input form__input'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
