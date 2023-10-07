import type { Meta, StoryObj } from '@storybook/react';

import Contact from './Contact';

const meta = {
  title: 'Pages/Contact',
  component: Contact,
  parameters: {
    componentSubtitle: '콘택트',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  args: {},
};
