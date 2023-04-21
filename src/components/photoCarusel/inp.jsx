import { useState } from 'react';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
export const Inp = () => {
  const [image, setImage] = useState('');
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };
  return image ? (
    <img src={image} className='swiper-slide' alt='uploaded' />
  ) : (
    <>
      <input
        className='photoCarusel__input'
        type='file'
        onChange={handleImageChange}
      />
      <Plus className='plus' />
    </>
  );
};
