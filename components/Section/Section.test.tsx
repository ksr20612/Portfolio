import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './Section.stories';

const { Default } = composeStories(stories);

describe('<Section>', () => {
  test('섹션이 표시된다.', () => {
    const { container } = render(<Default />);
    expect(container.querySelectorAll('section')).toHaveLength(1);
  });
  test('컨텐츠가 표시된다.', () => {
    render(<Default />);
    expect(screen.getByTestId('contents')).toBeInTheDocument();
  });
});
