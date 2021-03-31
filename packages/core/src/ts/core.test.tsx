import { render, cleanup } from '@testing-library/react';
import Core from './core';

describe('Core component', () => {
  let textTag: HTMLParagraphElement | null = null;

  afterEach(() => {
    cleanup();
    textTag = null;
  });

  it('should exist', () => {
    const { container } = render(
      <Core>
        <p>Hello world!</p>
      </Core>,
    );

    textTag = container.querySelector('p') as HTMLParagraphElement;
    expect(textTag.textContent).toBe('Hello world!');
  });
});
