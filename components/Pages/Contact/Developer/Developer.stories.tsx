import type { Meta, StoryObj } from '@storybook/react';

import Developer from './Developer';

const meta = {
  title: 'Pages/Contact/Developer',
  component: Developer,
  parameters: {
    componentSubtitle: '콘택트',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Developer>;

export default meta;
type Story = StoryObj<typeof Developer>;

export const Default: Story = {
  args: {},
};
