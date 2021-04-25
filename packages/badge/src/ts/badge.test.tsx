import { render, cleanup } from '@testing-library/react';
import FirstComponent from './badge';

describe('FirstComponent component', () => {
  let textTag: HTMLParagraphElement | null = null;

  afterEach(() => {
    cleanup();
    textTag = null;
  });

  it('should exist', () => {
    const { container } = render(
      <FirstComponent>
        <p>Hello components!</p>
      </FirstComponent>,
    );

    textTag = container.querySelector('p') as HTMLParagraphElement;
    expect(textTag.textContent).toBe('Hello components!');
  });
});
