import { Meta, StoryObj } from '@storybook/react';
import Iframe from './Iframe';

const meta = {
  title: 'Iframes/Iframe',
  component: Iframe,
  parameters: {
    componentSubtitle: 'Iframe 태그',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Iframe>;

export default meta;
type Story = StoryObj<typeof Iframe>;

export const Velog: Story = {
  args: {
    src: 'https://velog.io/@ksr20612/',
    title: 'Velog',
  },
};

export const Naver: Story = {
  args: {
    src: 'https://blog.naver.com/naivethan',
    // src: 'https://tabby-henley-bfa.notion.site/41e40d5784b44da28ef0fce99d0a3f4e?pvs=4',
    title: 'Naver 블로그',
  },
};
