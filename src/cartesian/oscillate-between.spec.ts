import { Converter } from '../converters';
import { CartesianPosition } from './cartesian';
import { Time } from '..';
import { OscillateBetween } from './oscillate-between';
import { assertPositionAtTime, AssertPositionAtTime } from '../test-util';

describe('OscillateBetween', () => {
  describe('From (1,1) to (5,5) at speed sqrt(2) starting at t=1', () => {
    let converter: Converter<Time, CartesianPosition>;
    let assertPositionAtTimeFn!: AssertPositionAtTime;

    beforeEach(() => {
      converter = OscillateBetween(
        { x: 1, y: 1 },
        { x: 5, y: 5 },
        Math.SQRT2,
        1
      );
      assertPositionAtTimeFn = assertPositionAtTime(converter);
    });

    it('At t=0 position is start position', () => {
      assertPositionAtTimeFn(0, 1, 1);
    });

    it('At t=1 position is start position', () => {
      assertPositionAtTimeFn(1, 1, 1);
    });

    it('At t=2 position is SQRT2 after start position at (2,2)', () => {
      assertPositionAtTimeFn(2, 2, 2);
    });

    it('At t=5 position is end position', () => {
      assertPositionAtTimeFn(5, 5, 5);
    });

    it('At t=6 position is SQRT2 before end position at (4,4)', () => {
      assertPositionAtTimeFn(6, 4, 4);
    });

    it('At t=9 position is at start position', () => {
      assertPositionAtTimeFn(9, 1, 1);
    });

    it('At t=10 position is SQRT2 after start position at (2,2)', () => {
      assertPositionAtTimeFn(10, 2, 2);
    });
  });
});
