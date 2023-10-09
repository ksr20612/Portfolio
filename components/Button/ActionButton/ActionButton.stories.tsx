import type { Meta, StoryObj } from '@storybook/react';
import LensIcon from 'public/icons/lens.svg';
import EnterIcon from 'public/icons/enter.svg';
import ActionButton from './ActionButton';

const meta = {
  title: 'Buttons/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'centered',
    componentSubtitle: '액션을 발생시키는 액션 버튼입니다.',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof ActionButton>;

const sampleOnClick = () => console.log('clicked!');
export const Default: Story = {
  render: () => <ActionButton onClick={sampleOnClick}>확인하기</ActionButton>,
};

export const LeftIcon: Story = {
  render: () => (
    <ActionButton
      onClick={sampleOnClick}
      leftIcon={<LensIcon width="0.9em" height="0.9em" className="text-current stroke-current" />}>
      상세보기
    </ActionButton>
  ),
};

export const RightIcon: Story = {
  render: () => (
    <ActionButton
      onClick={sampleOnClick}
      rightIcon={
        <EnterIcon width="0.9em" height="0.9em" className="text-current stroke-current" />
      }>
      이동하기
    </ActionButton>
  ),
};
