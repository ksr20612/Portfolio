import type { Meta, StoryObj } from '@storybook/react';

import ProjectCard from './ProjectCard';

const meta = {
  title: 'Pages/Projects/ProjectCard',
  component: ProjectCard,
  parameters: {
    componentSubtitle: '수행한 업무와 프로젝트 목록: 탭을 통해 프로젝트를 구분합니다.',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {},
};
