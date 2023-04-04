import React, { useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import './Slider.css';
import photo_1 from '../../assets/img/photo-1.webp';
import photo_2 from '../../assets/img/photo-2.webp';
import photo_3 from '../../assets/img/photo-3.webp';
import photo_4 from '../../assets/img/photo-4.webp';
import photo_5 from '../../assets/img/photo-5.webp';
import photo_6 from '../../assets/img/photo-6.webp';
import photo_7 from '../../assets/img/photo-7.webp';
import photo_8 from '../../assets/img/photo-8.webp';
import photo_9 from '../../assets/img/photo-9.webp';
import photo_10 from '../../assets/img/photo-10.webp';
import photo_11 from '../../assets/img/photo-11.webp';
import photo_12 from '../../assets/img/photo-12.webp';
import photo_13 from '../../assets/img/photo-13.webp';
import photo_14 from '../../assets/img/photo-14.webp';
import photo_15 from '../../assets/img/photo-15.webp';

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
              <img src={photo_1} alt='girl' />
            </div>
            <div
              className='slider__photo-2 item'
              data-scroll
              data-scroll-speed='0.5'
            >
              <img src={photo_2} alt='baby heels' />
            </div>
            <div
              className='slider__photo-3 item'
              data-scroll
              data-scroll-speed='2'
            >
              <img src={photo_3} alt='mom and baby' />
            </div>
            <div
              className='slider__photo-4 item'
              data-scroll
              data-scroll-speed='3'
            >
              <img src={photo_4} alt='mom and daughter' />
            </div>
            <div
              className='slider__photo-5 item'
              data-scroll
              data-scroll-speed='1.5'
            >
              <img src={photo_5} alt='half of a woman face' />
            </div>
            <div
              className='slider__photo-6 item'
              data-scroll
              data-scroll-speed='1.5'
            >
              <img src={photo_6} alt='woman' />
            </div>
            <div
              className='slider__photo-7 item'
              data-scroll
              data-scroll-speed='2'
            >
              <img src={photo_7} alt='bride and groom' />
            </div>
            <div
              className='slider__photo-8 item'
              data-scroll
              data-scroll-speed='2'
            >
              <img src={photo_8} alt='woman profile' />
            </div>
            <div
              className='slider__photo-9 item'
              data-scroll
              data-scroll-speed='1.5'
            >
              <img src={photo_9} alt='man with glasses' />
            </div>
            <div
              className='slider__photo-10 item'
              data-scroll
              data-scroll-speed='3'
            >
              <img src={photo_10} alt='woman negative' />
            </div>
            <div
              className='slider__photo-11 item'
              data-scroll
              data-scroll-speed='1.5'
            >
              <img src={photo_11} alt='mother and daughter with flowers' />
            </div>
            <div
              className='slider__photo-12 item'
              data-scroll
              data-scroll-speed='2.5'
            >
              <img src={photo_12} alt='woman profile negative' />
            </div>
            <div
              className='slider__photo-13 item'
              data-scroll
              data-scroll-speed='3'
            >
              <img src={photo_13} alt='curly woman' />
            </div>
            <div
              className='slider__photo-14 item'
              data-scroll
              data-scroll-speed='1'
            >
              <img src={photo_14} alt='rings on hand' />
            </div>
            <div
              className='slider__photo-15 item'
              data-scroll
              data-scroll-speed='2'
            >
              <img src={photo_15} alt='mother and daughter with dog' />
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
