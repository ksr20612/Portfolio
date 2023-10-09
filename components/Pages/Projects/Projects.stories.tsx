import type { Meta, StoryObj } from '@storybook/react';

import Projects from './Projects';

const meta = {
  title: 'Pages/Projects',
  component: Projects,
  parameters: {
    componentSubtitle: '수행한 업무와 프로젝트 목록',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Projects>;

export default meta;
type Story = StoryObj<typeof Projects>;

export const Default: Story = {
  args: {},
};
