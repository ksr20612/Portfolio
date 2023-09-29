import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Button/main',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: '저장하기',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: '저장하기',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    label: '저장하기',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: '저장하기',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: '저장하기',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: '저장하기',
    state: 'disabled',
  },
};
