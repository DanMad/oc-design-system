import * as greetFn from './greet';

describe('Greet function', () => {
  const greetSpy = jest.spyOn(greetFn, 'default');
  const { default: greet } = greetFn;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return "Hello world" if called without a name', () => {
    greet();
    expect(greetSpy).toBeCalledTimes(1);
    expect(greetSpy).toBeCalledWith();
    expect(greetSpy.mock.results[0].value).toBe('Hello world');
  });

  it('should return Hello and the name passed as argument (e.g. Hello Andrea)', () => {
    let name = 'Andrea';
    greet(name);
    expect(greetSpy).toBeCalledTimes(1);
    expect(greetSpy).toBeCalledWith(name);
    expect(greetSpy.mock.results[0].value).toBe(`Hello ${name}`);

    name = 'Daniel';
    greet(name);
    expect(greetSpy).toBeCalledTimes(2);
    expect(greetSpy).toBeCalledWith(name);
    expect(greetSpy.mock.results[1].value).toBe(`Hello ${name}`);
  });
});
