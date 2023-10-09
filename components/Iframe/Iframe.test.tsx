import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from './Iframe.stories';

const { Velog } = composeStories(stories);

describe('<Iframe>', () => {
  test('<a>를 렌더링한다.', () => {
    const { container } = render(<Velog />);
    expect(container.querySelectorAll('a')).toHaveLength(1);
  });
  test('<iframe>을 렌더링한다.', () => {
    const { container } = render(<Velog />);
    expect(container.querySelectorAll('iframe')).toHaveLength(1);
  });
  test('<iframe>의 src가 일치한다.', () => {
    const { container } = render(<Velog />);
    expect(container.querySelectorAll('iframe')[0].src).toBe('https://velog.io/@ksr20612/');
  });
});
