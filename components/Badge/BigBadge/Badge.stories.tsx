import type { Meta, StoryObj } from '@storybook/react';
import ReactIcon from 'public/icons/skills/react.svg';
import NextIcon from 'public/icons/skills/nextjs.svg';
import Badge from './BigBadge';

const meta = {
  title: 'Badge/BigBadge',
  component: Badge,
  parameters: {
    componentSubtitle: '<SVG>와 짧은 설명으로 구성된 큰 배지',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    icon: <ReactIcon width="100px" height="100px" />,
    title: 'React',
  },
};

export const DefaultWithChildren: Story = {
  args: {
    icon: <NextIcon width="100px" height="100px" />,
    title: 'NextJs',
    children: '^13',
  },
};
