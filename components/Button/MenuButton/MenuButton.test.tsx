import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import * as stories from './MenuButton.stories';

const { Default } = composeStories(stories);

describe('<MenuButton>', () => {
  test('햄버거 메뉴를 렌더링한다', () => {
    const { container } = render(
      <RecoilRoot>
        <Default />
      </RecoilRoot>,
    );
    expect(container.querySelectorAll('svg')).toHaveLength(1);
  });
});
