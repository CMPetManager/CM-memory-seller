import React, { useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import './Slider.css';

function MyLocomotiveScroll() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      direction: 'horizontal',
      multiplier: 0.5,
      touchMultiplier: 3,
      scrollFromAnywhere: true, //дозволяє починати прокручування з будь-якої точки екрану
      horizontalContainer: '.scroll-horizontal',
      offset: 500,
      // repeat: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className='Slider'>
      <div
        className='Slider__Container'
        data-scroll-container
        data-scroll-direction
      >
        <div className='Slider__Section' data-scroll-section ref={scrollRef}>
          <div className='scroll-content scroll-horizontal'>
            <div
              className='Slider__Section__Photo_1 item'
              data-scroll
              data-scroll-speed='1'
            >
              <img src='/images/photo_1.jpg' alt='girl' />
            </div>
            <div
              className='Slider__Section__Photo_2 item'
              data-scroll
              data-scroll-speed='0.5'
            >
              <img src='/images/photo_2.jpg' alt='baby heels' />
            </div>
            <div
              className='Slider__Section__Photo_3 item'
              data-scroll
              data-scroll-speed='2'
            >
              <img src='/images/photo_3.jpg' alt='mom and baby' />
            </div>
            <div
              className='Slider__Section__Photo_4 item'
              data-scroll
              data-scroll-speed='3'
            >
              <img src='/images/photo_4.jpg' alt='mom and daughter' />
            </div>
            <div
              className='Slider__Section__Photo_5 item'
              data-scroll
              data-scroll-speed='1.5'
            >
              <img src='/images/photo_5.jpg' alt='half of a woman face' />
            </div>
            <div
              className='Slider__Section__Photo_6 item'
              data-scroll
              data-scroll-speed='1.5'
            >
              <img src='/images/photo_6.jpg' alt='woman' />
            </div>
            <div
              className='Slider__Section__Photo_7 item'
              data-scroll
              data-scroll-speed='2'
            >
              <img src='/images/photo_7.jpg' alt='bride and groom' />
            </div>
            <div
              className='Slider__Section__Photo_8 item'
              data-scroll
              data-scroll-speed='2'
            >
              <img src='/images/photo_8.jpg' alt='woman profile' />
            </div>
            <div
              className='Slider__Section__Photo_9 item'
              data-scroll
              data-scroll-speed='1.5'
            >
              <img src='/images/photo_9.jpg' alt='man with glasses' />
            </div>
            <div
              className='Slider__Section__Photo_10 item'
              data-scroll
              data-scroll-speed='3'
            >
              <img src='/images/photo_10.jpg' alt='woman negative' />
            </div>
            <div
              className='Slider__Section__Photo_11 item'
              data-scroll
              data-scroll-speed='1.5'
            >
              <img
                src='/images/photo_11.jpg'
                alt='mother and daughter with flowers'
              />
            </div>
            <div
              className='Slider__Section__Photo_12 item'
              data-scroll
              data-scroll-speed='2.5'
            >
              <img src='/images/photo_12.jpg' alt='woman profile negative' />
            </div>
            <div
              className='Slider__Section__Photo_13 item'
              data-scroll
              data-scroll-speed='3'
            >
              <img src='/images/photo_13.jpg' alt='curly woman' />
            </div>
            <div
              className='Slider__Section__Photo_14 item'
              data-scroll
              data-scroll-speed='1'
            >
              <img src='/images/photo_14.jpg' alt='rings on hand' />
            </div>
            <div
              className='Slider__Section__Photo_15 item'
              data-scroll
              data-scroll-speed='2'
            >
              <img
                src='/images/photo_15.jpg'
                alt='mother and daughter with dog'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider() {
  return (
    <LocomotiveScrollProvider>
      <MyLocomotiveScroll />
    </LocomotiveScrollProvider>
  );
}

export default Slider;
