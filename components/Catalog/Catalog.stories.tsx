import type { Meta, StoryObj } from '@storybook/react';

import Catalog from './Catalog';

const meta = {
  title: 'Catalog/Catalog',
  component: Catalog,
  parameters: {
    componentSubtitle: '헤더의 햄버거 메뉴를 클릭하면 나오는 카탈로그입니다.',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Catalog>;

export default meta;
type Story = StoryObj<typeof Catalog>;

export const Default: Story = {
  args: {},
};
