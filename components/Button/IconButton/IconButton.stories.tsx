import type { Meta, StoryObj } from '@storybook/react';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import IconButton from './IconButton';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    componentSubtitle:
      '아이콘 버튼입니다. mui > iconButton을 이용합니다. @mui/icons-material의 아이콘을 넘겨받습니다.',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Description: Story = {
  render: () => (
    <IconButton aria-label="상세 보기">
      <DescriptionOutlinedIcon fontSize="large" id="description_icon" />
    </IconButton>
  ),
};

export const ArrowUp: Story = {
  render: () => (
    <IconButton aria-label="맨 위로">
      <ArrowCircleUpOutlinedIcon fontSize="large" id="arrowUp_icon" />
    </IconButton>
  ),
};
