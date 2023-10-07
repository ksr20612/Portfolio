import type { Meta, StoryObj } from '@storybook/react';
import Skills from './Skills';

const meta = {
  title: 'Pages/Skills',
  component: Skills,
  parameters: {
    componentSubtitle: '스킬',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skills>;

export default meta;
type Story = StoryObj<typeof Skills>;

export const Default: Story = {
  args: {},
};
