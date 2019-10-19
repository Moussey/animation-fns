import { curriedAdd } from './my-first-fn';

describe('curriedAdd', () => {
  it('Adds numbers', () => {
    const four = curriedAdd(2)(2);
    expect(four).toBe(4);
  });

  it('Can be curried', () => {
    const addTwo = curriedAdd(2);
    const three = addTwo(1);
    expect(three).toBe(3);
  });
});
