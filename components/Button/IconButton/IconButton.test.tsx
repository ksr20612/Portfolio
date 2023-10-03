import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as Stories from './IconButton.stories';

const { Description } = composeStories(Stories);

describe('<IconButton>', () => {
  const { container } = render(<Description />);
  test('버튼을 렌더링한다', () => {
    expect(container.querySelectorAll('button')).toHaveLength(1);
  });
});
