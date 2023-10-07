import type { Meta, StoryObj } from '@storybook/react';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Swiper from './Swiper';
import Heart from '../../public/icons/heart.png';

const meta = {
  title: 'Swiper/Swiper',
  component: Swiper,
  parameters: {
    componentSubtitle: '슬라이드',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Swiper>;

export default meta;
type Story = StoryObj<typeof Swiper>;

export const Default: Story = {
  args: {
    children: (
      <>
        <SwiperSlide>
          <Image src={Heart} alt="슬라이드1" />
        </SwiperSlide>
        <SwiperSlide>슬라이드2</SwiperSlide>
      </>
    ),
  },
};
