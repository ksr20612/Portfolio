import type { Meta, StoryObj } from '@storybook/react';
import MenuButton from './MenuButton';

const meta = {
  title: 'Buttons/MenuButton',
  component: MenuButton,
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
      '모바일/태블릿 환경, 헤더 내에서 사용되는 햄버거 버튼입니다. Lottie를 활용합니다.',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof MenuButton>;

export const Default: Story = {};
