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
      lerp: 0.03,
      direction: 'horizontal',
      multiplier: 0.3,
      touchMultiplier: 3,
      scrollFromAnywhere: true, //дозволяє починати прокручування з будь-якої точки екрану
      horizontalContainer: '.scroll-horizontal',
      offset: 500,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className='slider'>
      <div
        className='slider__container'
        data-scroll-container
        data-scroll-direction
      >
        <div className='slider__section' data-scroll-section ref={scrollRef}>
          <div className='scroll-content scroll-horizontal'>
            <div
              className='slider__photo-1 item'
              data-scroll
              data-scroll-speed='1'
            >
              <img src='/images/photo_1.jpg ' alt='girl' />
            </div>
            <div
              className='slider__photo-2 item'
              data-scroll
              data-scroll-speed='0.5'
            >
              <img src='/images/photo_2.jpg ' alt='baby heels' />
            </div>
            <div
              className='slider__photo-3 item'
              data-scroll
              data-scroll-speed='2'
            >
              <img src='/images/photo_3.jpg ' alt='mom and baby' />
            </div>
            <div
              className='slider__photo-4 item'
              data-scroll
              data-scroll-speed='3'
            >
              <img src='/images/photo_4.jpg ' alt='mom and daughter' />
            </div>
            <div
              className='slider__photo-5 item'
              data-scroll
              data-scroll-speed='1.5'
            >
              <img src='/images/photo_5.jpg ' alt='half of a woman face' />
            </div>
            <div
              className='slider__photo-6 item'
              data-scroll
              data-scroll-speed='1.5'
            >
              <img src='/images/photo_6.jpg ' alt='woman' />
            </div>
            <div
              className='slider__photo-7 item'
              data-scroll
              data-scroll-speed='2'
            >
              <img src='/images/photo_7.jpg ' alt='bride and groom' />
            </div>
            <div
              className='slider__photo-8 item'
              data-scroll
              data-scroll-speed='2'
            >
              <img src='/images/photo_8.jpg ' alt='woman profile' />
            </div>
            <div
              className='slider__photo-9 item'
              data-scroll
              data-scroll-speed='1.5'
            >
              <img src='/images/photo_9.jpg ' alt='man with glasses' />
            </div>
            <div
              className='slider__photo-10 item'
              data-scroll
              data-scroll-speed='3'
            >
              <img src='/images/photo_10.jpg ' alt='woman negative' />
            </div>
            <div
              className='slider__photo-11 item'
              data-scroll
              data-scroll-speed='1.5'
            >
              <img
                src='/images/photo_11.jpg '
                alt='mother and daughter with flowers'
              />
            </div>
            <div
              className='slider__photo-12 item'
              data-scroll
              data-scroll-speed='2.5'
            >
              <img src='/images/photo_12.jpg ' alt='woman profile negative' />
            </div>
            <div
              className='slider__photo-13 item'
              data-scroll
              data-scroll-speed='3'
            >
              <img src='/images/photo_13.jpg ' alt='curly woman' />
            </div>
            <div
              className='slider__photo-14 item'
              data-scroll
              data-scroll-speed='1'
            >
              <img src='/images/photo_14.jpg ' alt='rings on hand' />
            </div>
            <div
              className='slider__photo-15 item'
              data-scroll
              data-scroll-speed='2'
            >
              <img
                src='/images/photo_15.jpg '
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
