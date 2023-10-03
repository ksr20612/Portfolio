import type { Meta, StoryObj } from '@storybook/react';

import Intro from './Intro';

const meta = {
  title: 'Pages/Intro',
  component: Intro,
  parameters: {
    componentSubtitle: '인트로',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Intro>;

export default meta;
type Story = StoryObj<typeof Intro>;

export const Default: Story = {
  args: {},
};
