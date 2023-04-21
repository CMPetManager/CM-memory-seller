import React, { useState } from 'react';
import './TemplateFirst.css';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { CardForAlbum } from 'components/CardForAlbum/CardForAlbum';
export const TemplateFirst = () => {
  return (
    <Droppable droppableId='template1'>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {[1, 2, 3, 4, 5, 6].map((index) => {
            return (
              <Draggable
                key={index}
                draggableId={`template1+${index}`}
                index={index}
              >
                {(provided) => (
                  <div
                    className='templateFirst__container'
                    key={'templateFirst' + index}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <CardForAlbum size='big_landscope' />
                    <div className='templateFirst_shortImage_container'>
                      <CardForAlbum size='big_vertical' />
                      <CardForAlbum size='big_vertical' />
                    </div>
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

////
