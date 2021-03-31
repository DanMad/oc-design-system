import utils, { BEM, namespace } from './utils';

describe('Utils', () => {
  it('should contain all core utilities', () => {
    expect(utils).toStrictEqual({
      bem: BEM,
      namespace,
    });
  });

  test('all core utilities are the correct types', () => {
    expect(typeof BEM).toBe('function');
    expect(typeof namespace).toBe('string');
  });
});
