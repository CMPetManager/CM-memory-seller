import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import 'swiper/css';
import 'swiper/css/pagination';

import './PhotoCarusel.css';

import { Inp } from 'components/photoCarusel/inp';
export const PhotoCarusel = ({ ...props }, ref) => {
  return (
    <Droppable droppableId='siper' type='list' direction='horizontal'>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className='mySwiper photoCarusel_container'
          >
            {['1', '2', '3'].map((index) => {
              return (
                <Draggable
                  key={index}
                  draggableId={`Swiper+${index}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      key={index}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <SwiperSlide>
                        <Inp />
                      </SwiperSlide>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </Swiper>
        </div>
      )}
    </Droppable>
  );
};

////
{
  /* <div style={{ width: '100%', display: 'flex' }}>
  <Droppable droppableId='Marvel_drop_area'>
    {(provided, snapshot) => (
  //    <div
  {...provided.droppableProps}
  ref={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}
      >
        <ul
          style={{
            listStyleType: 'none',
            textAlign: 'left',
            padding: '0%',
            width: '100%',
          }}
        >
          <h6 style={{ paddingLeft: '2%' }}>Marvel SuperHeroes</h6>
          {Marvel.map((data, index) => (
            <Draggable key={data} draggableId={`${data}${index}`} index={index}>
              {(provided, snapshot) => (
                <li
                  key={index}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                  )}
                >
                  {data}
                </li>
              )}
            </Draggable>
          ))}
        </ul>
        {provided.placeholder}
      </div>
    )}
  </Droppable>
  <Droppable droppableId='DC_drop_area'>
    {(provided, snapshot) => (
      <div {...provided.droppableProps} ref={provided.innerRef}>
        <ul
          style={{
            listStyleType: 'none',
            textAlign: 'left',
            padding: '0%',
            width: '100%',
          }}
        >
          <h6 style={{ paddingLeft: '2%' }}>DC SuperHeroes</h6>
          {DC.map((data, index) => (
            <Draggable key={data} draggableId={`${data}${index}`} index={index}>
              {(provided, snapshot) => (
                <li
                  key={index}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {data}
                </li>
              )}
            </Draggable>
          ))}
        </ul>
        {provided.placeholder}
      </div>
    )}
  </Droppable>
</div>; */
}
