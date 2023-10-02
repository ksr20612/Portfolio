import type { Meta, StoryObj } from '@storybook/react';

import { ReactComponent as HeartIcon } from 'public/icons/heart.svg';
import IconButton from './IconButton';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Icon: Story = {
  render: () => <IconButton icon={<HeartIcon />} />,
};
