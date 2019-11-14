import { Converter } from '../converters';
import { Connect } from './connect';

interface From {
  a: number;
}

interface Im {
  b: number;
}

interface To {
  c: number;
}

describe('Connect', () => {
  it('Applies conversions correctly', () => {
    const first: Converter<From, Im> = {
      convert: ({ a }) => ({ b: a + 1 })
    };
    const second: Converter<Im, To> = {
      convert: ({ b }) => ({ c: b * 2 })
    };

    // connected should be c = (a + 1) * 2
    const connected = Connect(first, second);

    expect(connected.convert({ a: 2 }).c).toBe(6);
    expect(connected.convert({ a: 3 }).c).toBe(8);
  });
});
