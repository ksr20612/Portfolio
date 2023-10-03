import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './Title.stories';

const { Default } = composeStories(stories);

describe('<TitleButton>', () => {
  test('<h2>를 렌더링한다.', () => {
    const { container } = render(<Default />);
    expect(container.querySelectorAll('h2')).toHaveLength(1);
  });
  test('버튼의 내용이 렌더링된다.', () => {
    render(<Default />);
    expect(screen.getByText('Title')).not.toBeNull();
  });
});
