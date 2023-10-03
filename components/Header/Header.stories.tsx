import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta = {
  title: 'Header/Header',
  component: Header,
  parameters: {
    layout: 'centered',
    componentSubtitle: '기본적인 헤더입니다.',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
