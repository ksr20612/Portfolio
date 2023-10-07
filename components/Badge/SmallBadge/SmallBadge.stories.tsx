import type { Meta, StoryObj } from '@storybook/react';
import Badge from './SmallBadge';

const meta = {
  title: 'Badge/SmallBadge',
  component: Badge,
  parameters: {
    componentSubtitle: '짧은 단어로 구성된 작은 배지',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'React-query',
  },
};
