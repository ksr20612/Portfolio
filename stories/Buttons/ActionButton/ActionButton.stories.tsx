import type { Meta, StoryObj } from '@storybook/react';

import { ReactComponent as HeartIcon } from 'public/icons/heart.svg';
import ActionButton from './ActionButton';

const meta = {
  title: 'Buttons/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Action: Story = {
  render: () => <ActionButton>저장하기</ActionButton>,
};

export const Icon: Story = {
  args: {
    leftIcon: <HeartIcon />,
    children: '저장하기',
  },
};
