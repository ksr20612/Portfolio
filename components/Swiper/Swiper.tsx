'use client';

import React, { ReactElement } from 'react';
import { Swiper as SwiperBox, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

interface SwiperProps {
  children: React.ReactElement<typeof SwiperSlide>;
}

function Swiper({ children }: SwiperProps): ReactElement {
  return (
    <SwiperBox
      cssMode
      navigation
      pagination
      keyboard
      loop
      modules={[Navigation, Pagination, Keyboard]}
      data-testid="swiper"
      className="transparent text-center w-full h-auto flex justify-center items-center">
      {children}
    </SwiperBox>
  );
}

export default Swiper;
