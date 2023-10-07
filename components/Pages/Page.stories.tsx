import type { Meta, StoryObj } from '@storybook/react';

import Page from '../../app/page';

const meta = {
  title: 'Pages/Page',
  component: Page,
  parameters: {
    componentSubtitle: '전체 페이지',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {},
};
