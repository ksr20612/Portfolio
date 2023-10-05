import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './Modal.stories';

const { Opened, Closed } = composeStories(stories);

describe('<Modal>', () => {
  test('모달이 표시된다', () => {
    render(<Opened />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
