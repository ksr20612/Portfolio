import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import * as stories from './Header.stories';

const { Default } = composeStories(stories);

describe('<Header>', () => {
  test('로고를 렌더링한다', () => {
    render(
      <RecoilRoot>
        <Default />
      </RecoilRoot>,
    );
    expect(screen.getByText('Dong Yeon')).toBeInTheDocument();
  });
  test('링크를 렌더링한다', () => {
    const { container } = render(
      <RecoilRoot>
        <Default />
      </RecoilRoot>,
    );
    expect(container.querySelectorAll('a')).toHaveLength(7);
  });
});
