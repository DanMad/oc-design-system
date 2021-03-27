import core, { greet } from './core';

describe('Core', () => {
  it('should contain all core utilities', () => {
    expect(core).toStrictEqual({
      greet,
    });
  });

  it('should contain greet utility', () => {
    expect(typeof greet).toBe('function');
  });
});
