import { Link } from 'react-router-dom';

import './ModalBack.css';

import imgX from 'assets/icons/x1.svg';

const ModalBack = ({ children }) => {
  return (
    <div className='modal__wrapper'>
      <div className='modal__container'>
        <Link to={'/'} className='modal__close'>
          <img src={imgX} alt='close button' className='modal__close-icon' />
        </Link>
        {children}
      </div>
    </div>
  );
};

export default ModalBack;
