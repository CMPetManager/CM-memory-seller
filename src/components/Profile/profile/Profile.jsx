/* eslint-disable jsx-a11y/img-redundant-alt */
import './Profile.css';
// import MenuProfile from '../menu-profile/Menu-profile';
import profilePhoto from 'assets/icons/profile_photo.svg';
import addPhoto from 'assets/icons/Add-photo.svg';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

const Profile = () => {
  const [nameInput, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();

  // const submissionForm = () => {
  //   console.log(nameInput, email);
  // };
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

  return (
    <div className='profile'>
      <div className='profile__body'>
        {/* <MenuProfile /> */}
        <div className='profile__background'>
          <p className='profile__background_higher'>Catch the</p>
          <p className='profile__background_below'>Moment</p>
        </div>
        <div className='profile__home'>
          <Link to='../'>Home</Link>
        </div>
        <div className='profile__user'>
          <div className='profile__user-photo'>
            <input
              className='profile__user-photo_hiden'
              type='file'
              accept='.jpeg, .png, .jpg'
              onChange={onUploadFile}
            ></input>
            <img
              src={imageURL}
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
            <h2>Sandström</h2>
            <h3>Free account</h3>
          </div>
          <div className='profile__inputs'>
            <div className='profile__name-input'>
              <input
                name='name'
                type='text'
                placeholder='Name'
                className='input_form'
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className='profile__name-input'>
              <input
                name='email'
                placeholder='Email address'
                type='text'
                className='input_form'
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
