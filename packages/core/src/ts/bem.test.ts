import * as BEM from './bem';
import namespace from './namespace';

describe('BEM Module', () => {
  const bemSpy = jest.spyOn(BEM, 'default');
  const bem = BEM.default(' foo ');

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the correct utility functions', () => {
    const { getBlock, getElement, getModifier } = bem;

    expect(bemSpy).toBeCalledTimes(1);
    expect(bemSpy).toBeCalledWith(' foo ');
    expect(bemSpy.mock.results[0].value).toEqual({
      getBlock,
      getElement,
      getModifier,
    });
  });

  describe('BEM.getBlock Function', () => {
    const getBlockSpy = jest.spyOn(bem, 'getBlock');
    const { getBlock } = bem;

    it('should return the namespaced block', () => {
      getBlock();
      expect(getBlockSpy).toBeCalledTimes(1);
      expect(getBlockSpy).toBeCalledWith();
      expect(getBlockSpy.mock.results[0].value).toEqual(`${namespace}-foo`);
    });
  });

  describe('BEM.getElement Function', () => {
    const getElementSpy = jest.spyOn(bem, 'getElement');
    const { getElement } = bem;

    it('should return the namespaced block and element', () => {
      getElement(' bar ');

      expect(getElementSpy).toBeCalledTimes(1);
      expect(getElementSpy).toBeCalledWith(' bar ');
      expect(getElementSpy.mock.results[0].value).toEqual(
        `${namespace}-foo__bar`,
      );
    });
  });

  describe('BEM.getModifier Function', () => {
    const getModifierSpy = jest.spyOn(bem, 'getModifier');
    const { getModifier } = bem;

    it('should return the namespaced block and modifier', () => {
      getModifier(' baz ');

      expect(getModifierSpy).toBeCalledTimes(1);
      expect(getModifierSpy).toBeCalledWith(' baz ');
      expect(getModifierSpy.mock.results[0].value).toEqual(
        `${namespace}-foo--baz`,
      );
    });

    it('should return the namespaced block, element and modifier', () => {
      getModifier(' qux ', ' thud ');

      expect(getModifierSpy).toBeCalledTimes(1);
      expect(getModifierSpy).toBeCalledWith(' qux ', ' thud ');
      expect(getModifierSpy.mock.results[0].value).toEqual(
        `${namespace}-foo__thud--qux`,
      );

      getModifier(' corge ', ` ${namespace}-foo__plugh `);

      expect(getModifierSpy).toBeCalledTimes(2);
      expect(getModifierSpy).toBeCalledWith(
        ' corge ',
        ` ${namespace}-foo__plugh `,
      );
      expect(getModifierSpy.mock.results[1].value).toEqual(
        `${namespace}-foo__plugh--corge`,
      );
    });
  });
});
