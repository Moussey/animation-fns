import { Converter } from '../converters';
import { Time } from '../time';
import { CartesianPosition } from './cartesian';
import { MoveBetween } from './move-between';

describe('MoveBetween', () => {
  describe('(0, 0) -> (10, 10) at sqrt(2) unit/time starting at 5', () => {
    let converter: Converter<Time, CartesianPosition>;

    beforeEach(() => {
      converter = MoveBetween({ x: 0, y: 0 }, { x: 10, y: 10 }, Math.SQRT2, 5);
    });

    it('At t<5 position is (0,0)', () => {
      expect(converter.convert({ time: 0 })).toEqual({ x: 0, y: 0 });
    });

    it('At t=5 position is (0, 0)', () => {
      expect(converter.convert({ time: 5 })).toEqual({ x: 0, y: 0 });
    });

    it('At t=6 position is (1, 1)', () => {
      expect(converter.convert({ time: 6 })).toEqual({ x: 1, y: 1 });
    });

    it('At t=15 position is (10, 10)', () => {
      expect(converter.convert({ time: 15 })).toEqual({ x: 10, y: 10 });
    });
  });

  describe('For a converter with a hook', () => {
    let converter: Converter<Time, CartesianPosition>;
    let hookCalled: number;

    // This MoveBetween should start at t=0 and end at t=10
    beforeEach(() => {
      hookCalled = 0;
      converter = MoveBetween(
        { x: 0, y: 0 },
        { x: 0, y: 10 },
        1,
        0,
        () => hookCalled++
      );
    });

    it('Hook is not called when converting a value before the end', () => {
      converter.convert({ time: 9 });
      expect(hookCalled).toBe(0);
    });

    it('Hook is called after converting a value at the end', () => {
      converter.convert({ time: 10 });
      expect(hookCalled).toBe(1);
    });

    it('Hook is only called once', () => {
      converter.convert({ time: 10 });
      converter.convert({ time: 11 });
      converter.convert({ time: 12 });
      expect(hookCalled).toBe(1);
    });
  });
});
