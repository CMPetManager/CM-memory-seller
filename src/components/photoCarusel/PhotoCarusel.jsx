import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from 'react-slick';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './PhotoCarusel.css';
import { Navigation } from 'swiper';
import { Pagination } from 'swiper';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { InputImage } from 'components/photoCarusel/InputImage';
export const PhotoCarusel = ({ ...props }, ref) => {
  const [image, setImage] = useState();
  const handleChange = (value) => {
    setImage(value);
  };

  const CaruselList = ({ count, data }) => {
    const list = [];
    for (let index = 0; index < count; index++) {
      list.push(
        <div className='swiper-slide'>
          <InputImage onChange={handleChange} index={index} />{' '}
        </div>
      );
    }
    return list;
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
  };

  return (
    <Slider {...settings} className='photoCarusel_container'>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={1} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={2} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={3} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={4} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={5} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={6} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={7} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={8} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={9} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={10} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={11} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={12} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={13} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={14} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={15} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={16} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={17} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={18} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={19} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={20} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={21} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={22} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={23} />{' '}
      </div>
      <div className='swiper-slide'>
        <InputImage onChange={handleChange} index={24} />{' '}
      </div>
    </Slider>
  );
};
