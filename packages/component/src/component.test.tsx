import { render, cleanup } from '@testing-library/react';
import Component from './component';

describe('Component', () => {
  let textTag: HTMLParagraphElement | null = null;

  afterEach(() => {
    cleanup();
    textTag = null;
  });

  it('should render correctly without a name', () => {
    const { container } = render(<Component />);
    textTag = container.querySelector('p.text') as HTMLParagraphElement;
    expect(textTag.textContent).toBe('Hello world');
    expect(textTag.classList).not.toContain('with-name');
  });

  it('should render correctly with a name', () => {
    const { container: containerAndrea } = render(<Component name="Andrea" />);
    textTag = containerAndrea.querySelector('p.text') as HTMLParagraphElement;
    expect(textTag.textContent).toBe('Hello Andrea');
    expect(textTag.classList).toContain('with-name');

    const { container: containerDaniel } = render(<Component name="Daniel" />);
    textTag = containerDaniel.querySelector('p.text') as HTMLParagraphElement;
    expect(textTag.textContent).toBe('Hello Daniel');
    expect(textTag.classList).toContain('with-name');
  });
});
