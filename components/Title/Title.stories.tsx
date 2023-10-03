import type { Meta, StoryObj } from '@storybook/react';

import Title from './Title';

const meta = {
  title: 'Title/Title',
  component: Title,
  parameters: {
    layout: 'centered',
    componentSubtitle: '기본적인 타이틀입니다. <section> 내에서 활용되며, <h2> 입니다.',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: 'Title',
  },
};
