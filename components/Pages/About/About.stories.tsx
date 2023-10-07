import type { Meta, StoryObj } from '@storybook/react';

import About from './About';

const meta = {
  title: 'Pages/About',
  component: About,
  parameters: {
    componentSubtitle: '어바웃 미',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof About>;

export const Default: Story = {
  args: {},
};
