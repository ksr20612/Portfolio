import type { Meta, StoryObj } from '@storybook/react';

import Experience from './Experience';

const meta = {
  title: 'Pages/Experience',
  component: Experience,
  parameters: {
    componentSubtitle: '경력',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Experience>;

export default meta;
type Story = StoryObj<typeof Experience>;

export const Default: Story = {
  args: {},
};
