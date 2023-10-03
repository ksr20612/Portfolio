import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from './Link.stories';

const { Default } = composeStories(stories);

describe('<Link>', () => {
  test('<a>를 렌더링한다.', () => {
    const { container } = render(<Default />);
    expect(container.querySelectorAll('a')).toHaveLength(1);
  });
  test('링크의 내용이 렌더링된다.', () => {
    const screen = render(<Default />);
    screen.getByText('링크');
  });
  test('href의 내용이 포함되어 있다.', () => {
    const { container } = render(<Default />);
    expect(container.querySelector('a')).toHaveAttribute('href', '#');
  });
});
