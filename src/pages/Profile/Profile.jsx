/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './Profile.css';

import useAxiosPrivate from 'hooks/useAxiosPrivate';
import useAuth from 'hooks/useAuth';

import ProfilePanel from 'components/ProfilePanel/ProfilePanel';
import addPhoto from 'assets/icons/Add-photo.svg';
import { Logo } from 'components/Logo/Logo';

const fileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/heic'];

const Profile = () => {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();

  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const { userId, name, email } = auth;

  const fileReader = new FileReader();
  fileReader.onload = () => {
    setImageURL(fileReader.result);
  };
  const onUploadFile = (e) => {
    e.preventDefault();
    console.log('change', e.target.files);
    setImage(e.target.files[0]);
    fileReader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    const uploadUserPhoto = async () => {
      if (!image) {
        console.log('no image');
        return;
      }
      try {
        const formData = new FormData();
        formData.append('image', image);
        console.log(formData);

        const response = await axiosPrivate.post(`users/${userId}`, formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        });

        if (response.data) {
          console.log(response.data);
        }
      } catch (err) {
        console.log(err);
        // setIsErrorResponse(true);
      }
    };

    if (imageURL) {
      uploadUserPhoto();
    }
  }, [imageURL]);

  return (
    <div className='profile'>
      <ProfilePanel activePage='profile' />
      <div className='profile__body'>
        <p className='profile__background background_higher'>Catch the</p>
        <p className='profile__background background_below'>Moment</p>
        <Link className='profile__home-link' to='/albums'>
          Home
        </Link>

        <div className='profile__user'>
          <div className='profile__user-photo'>
            <input
              className='profile__user-photo_hiden'
              type='file'
              accept='.jpeg, .png, .jpg, .heic'
              onChange={onUploadFile}
            />
            {imageURL ? (
              <img
                src={imageURL}
                alt='profile photo'
                className='profile__user-photo_user'
              />
            ) : (
              <Logo title={name[0]} />
            )}
            <img
              src={addPhoto}
              alt='add photo'
              className='profile__user-photo_add-photo'
            />
          </div>

          <div className='profile__user-name'>
            <h2>{name}</h2>
            <h3>Free account</h3>
          </div>
          <div className='profile__inputs'>
            <input
              name='name'
              type='text'
              disabled
              placeholder={name}
              className='input form__input'
            />
            <input
              name='email'
              placeholder={email}
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

export default Profile;
