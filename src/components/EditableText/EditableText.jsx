import React, { useState } from 'react';
import './EditableText.css';
export const EditableText = ({ text, textSize }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  function handleTextClick() {
    setIsEditing(true);
  }

  function handleInputChange(event) {
    setEditedText(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  }

  function handleInputBlur() {
    if (editedText.trim() !== '') {
      setEditedText(editedText.trim());
      setIsEditing(false);
    }
  }
  const style = {};
  let fontSize = textSize ? textSize : '4vw';
  return isEditing ? (
    <input
      className='cover__input'
      style={{ ...style, fontSize }}
      type='text'
      value={editedText}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onBlur={handleInputBlur}
    />
  ) : (
    <span
      className='cover__imag__text '
      style={{ ...style, fontSize }}
      onClick={handleTextClick}
    >
      {editedText}
    </span>
  );
};
