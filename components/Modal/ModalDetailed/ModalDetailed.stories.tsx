import type { Meta, StoryObj } from '@storybook/react';

import RockieIcon from 'public/rktk-logo.svg';
import ModalDetailed from './ModalDetailed';

const meta = {
  title: 'Modals/DetailModal',
  component: ModalDetailed,
  parameters: {
    layout: 'centered',
    componentSubtitle:
      '[상세 보기]에 사용되는 모달입니다. <IconButton>과 <Modal> 짝으로 구성되어 있어요.',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalDetailed>;

export default meta;
type Story = StoryObj<typeof ModalDetailed>;

export const Opened: Story = {
  args: {
    modalTitle: 'RockieTalkie',
    children: (
      <div>
        <RockieIcon />
        <h1>RockieTalkie 서비스에 대한 자세한 설명</h1>
        <br />
        <ul className="list-disc">
          <li>재미있는 영어 독서 습관</li>
          <li>AI 모델에게 발음을 평가 받아봐요.</li>
        </ul>
      </div>
    ),
  },
};
