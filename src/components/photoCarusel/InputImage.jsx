import { useState } from 'react';
import { useDrag } from 'react-dnd';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
export const InputImage = ({ onChange, index }) => {
  const [image, setImage] = useState();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(url);
      localStorage.setItem(`Image+${index}`, url);
    };
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ItemTypes.BOX',
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <div
      className='inputImage__container'
      ref={drag}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {!image ? (
        <>
          <input
            className='photoCarusel__input'
            type='file'
            onChange={handleImageChange}
          />
          <Plus className='plus' />
        </>
      ) : (
        ''
      )}
    </div>
  );
};
