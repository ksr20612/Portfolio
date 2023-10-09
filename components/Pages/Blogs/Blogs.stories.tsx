import type { Meta, StoryObj } from '@storybook/react';

import Blogs from './Blogs';

const meta = {
  title: 'Pages/Blogs',
  component: Blogs,
  parameters: {
    componentSubtitle: '블로그',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Blogs>;

export default meta;
type Story = StoryObj<typeof Blogs>;

export const Default: Story = {
  args: {},
};
