import namespace from './namespace';

const BEM = (block: string): Record<string, (...args: string[]) => string> => {
  const getBlock = (): string => `${namespace}-${block.trim()}`;

  const getElement = (element: string): string =>
    `${getBlock()}__${element.trim()}`;

  const getModifier = (modifier: string, element?: string): string => {
    if (!element) {
      return `${getBlock()}--${modifier.trim()}`;
    }

    return `${
      element.indexOf(getBlock()) === -1 ? getElement(element) : element.trim()
    }--${modifier.trim()}`;
  };

  return {
    getBlock,
    getElement,
    getModifier,
  };
};

export { BEM as default };
