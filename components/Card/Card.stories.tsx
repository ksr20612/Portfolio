import type { Meta, StoryObj } from '@storybook/react';

import mainImg from 'public/projects/rockie_landing/rockie_main.png';
import Card from './Card';

const meta = {
  title: 'Cards/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    componentSubtitle: '[Projects] 섹션에서 활용되는 카드',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    image: mainImg,
    title: 'RockieTalkie 온보딩',
    contents: <div>RockieTalkie 온보딩 내용</div>,
  },
};
