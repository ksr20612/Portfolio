import type { Meta, StoryObj } from '@storybook/react';

import { EventObject } from 'types/Event';
import Modal from './Modal';

const meta = {
  title: 'Modals/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    componentSubtitle: '기본적인 Modal입니다.',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Opened: Story = {
  args: {
    title: '모달창 제목',
    open: true,
    handleClose: (e: EventObject) => alert('modal closed!'),
    children: <div>모달 내용</div>,
  },
};

export const Closed: Story = {
  args: {
    title: '모달창 제목',
    open: false,
    handleClose: (e: EventObject) => alert('modal closed!'),
    children: <div>모달 내용</div>,
  },
};
