import React, { useState } from 'react';
import { ReactComponent as RevertPhoto } from 'assets/icons/revertPhoto.svg';
import { useDrop } from 'react-dnd';
import { EditableText } from 'components/EditableText/EditableText';
import './CardForAlbum.css';
export const CardForAlbum = ({ size, name }) => {
  const [imageShow, setImageShow] = useState(true);
  const [img, setImg] = useState();
  const style = {
    objectFit: 'cover',
  };
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'ItemTypes.BOX',
    drop: (item) => {
      const imgg = localStorage.getItem(`Image+${item.index}`);
      setImg(imgg);
    },

    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = 'transparent';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  return (
    <div className={size} ref={drop} style={{ ...style, backgroundColor }}>
      <RevertPhoto
        className='templateFirst__revert_icon'
        onClick={() => setImageShow(!imageShow)}
      />
      {imageShow ? (
        img ? (
          <img src={img} className='image' alt='Landscope' />
        ) : (
          <div className={`cover ${size}`}>
            <p className='cover__image__landscope__text'>Drop your photo</p>
          </div>
        )
      ) : (
        <div className='cover'>
          <EditableText text='Add text' />
        </div>
      )}
    </div>
  );
};
