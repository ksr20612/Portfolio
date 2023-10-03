import type { Meta, StoryObj } from '@storybook/react';

import Link from './Link';

const meta = {
  title: 'Links/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#666',
        },
      ],
    },
    componentSubtitle:
      '네비게이션 용도로 사용하는 링크입니다. Anchor 태그(next/link)로 구성되어 있어요.',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: '#',
    children: '링크',
  },
};
