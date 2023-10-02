import type { Meta, StoryObj } from '@storybook/react';

import { ReactComponent as HeartIcon } from 'public/icons/heart.svg';
import Button from './Button';

const meta = {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    componentSubtitle:
      'Buttons allow users to trigger an action or event with a single click. For example, you can use a button for allowing the functionality of submitting a form, opening a dialog, canceling an action, or performing a delete operation.',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button kind="primary">저장하기</Button>,
};

export const Secondary: Story = {
  render: () => <Button kind="secondary">저장하기</Button>,
};

export const Tertiary: Story = {
  render: () => <Button kind="tertiary">저장하기</Button>,
};

export const Danger: Story = {
  render: () => <Button kind="danger">저장하기</Button>,
};

export const Ghost: Story = {
  render: () => <Button kind="ghost">저장하기</Button>,
};

export const Inactive: Story = {
  render: () => <Button active={false}>저장하기</Button>,
};

export const LeftIcon: Story = {
  render: () => <Button leftIcon={<HeartIcon />}>좋아요</Button>,
};
