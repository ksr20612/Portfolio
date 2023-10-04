import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from './IconButton.stories';

const { Description } = composeStories(stories);

describe('<IconButton>', () => {
  const { container } = render(<Description />);
  test('버튼을 렌더링한다', () => {
    expect(container.querySelectorAll('button')).toHaveLength(1);
  });
});
