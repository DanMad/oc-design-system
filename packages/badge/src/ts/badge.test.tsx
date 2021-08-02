import { render } from '@testing-library/react';
import { namespace } from '@open-colleges/core';
import Badge from './badge';

describe('Badge component', () => {
  it('should exist', () => {
    const { container } = render(<Badge />);

    expect(container).not.toBeNull();
    expect(container.innerHTML).toContain('0');
  });

  it('handles small strict numbers', () => {
    const { container } = render(<Badge val={4} />);

    expect(container.innerHTML).toContain('4');
  });

  it('handles small loose numbers', () => {
    const { container } = render(<Badge val="4" />);

    expect(container.innerHTML).toContain('4');
  });

  it('handles medium strict numbers', () => {
    const { container } = render(<Badge val={16} />);

    expect(container.innerHTML).toContain('9+');
  });

  it('handles small loose numbers', () => {
    const { container } = render(<Badge val="16" />);

    expect(container.innerHTML).toContain('9+');
  });

  it('handles large strict numbers', () => {
    const { container } = render(<Badge val={100} />);

    expect(container.innerHTML).toContain('99+');
  });

  it('handles small loose numbers', () => {
    const { container } = render(<Badge val="100" />);

    expect(container.innerHTML).toContain('99+');
  });

  it('handles strings', () => {
    const { container } = render(<Badge val="  Hello World  " />);

    expect(container.innerHTML).toContain('Hello World');
  });

  it('handles strings with numbers', () => {
    const { container } = render(<Badge val="100 Messages" />);

    expect(container.innerHTML).toContain('100 Messages');
  });

  it('handles errors', () => {
    const { container } = render(<Badge modifier="error" />);

    expect(container.querySelector('span')?.classList).toContain(
      `${namespace}-badge--error`,
    );
  });

  it('handles successes', () => {
    const { container } = render(<Badge modifier="success" />);

    expect(container.querySelector('span')?.classList).toContain(
      `${namespace}-badge--success`,
    );
  });
});
