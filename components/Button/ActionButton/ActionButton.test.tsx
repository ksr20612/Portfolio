import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from './ActionButton.stories';

const { Default, LeftIcon } = composeStories(stories);

describe('<ActionButton>', () => {
  test('버튼을 렌더링한다', () => {
    const { container } = render(<Default />);
    expect(container.querySelectorAll('button')).toHaveLength(1);
  });
  test('', () => {
    const { container } = render(<LeftIcon />);
    expect(container.querySelectorAll('button > svg')).toHaveLength(1);
  });
});
