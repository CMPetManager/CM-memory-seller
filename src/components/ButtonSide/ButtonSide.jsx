import React, { useState, useRef, useEffect, Children } from 'react';
import 'pages/Album/Album.css';
export const ButtonSide = ({ madalactive, setModalActive, children }) => {
  const componentRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setModalActive(true);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [madalactive]);
  return (
    <button
      ref={componentRef}
      className='albom__button_view'
      onClick={() => {
        return setModalActive(!madalactive);
      }}
    >
      {children}
    </button>
  );
};
