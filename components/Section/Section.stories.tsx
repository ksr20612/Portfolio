import { Meta, StoryObj } from '@storybook/react';
import Section from './Section';

const meta = {
  title: 'Sections/Section',
  component: Section,
  parameters: {
    componentSubtitle: '각 구간을 감싸는 <secion>으로 구성되어 있습니다.',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    children: <div data-testid="contents">컨텐츠</div>,
  },
};
