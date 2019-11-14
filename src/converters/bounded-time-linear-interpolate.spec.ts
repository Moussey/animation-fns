import { Time } from '../time';
import { BoundedTimeLinearInterpolate } from './bounded-time-linear-interpolate';

describe('BoundedLinearInterpolate', () => {
  describe('For linear interpolate between 2 and 4', () => {
    let linearInterpolator: (time: Time) => number;

    beforeEach(() => {
      linearInterpolator = BoundedTimeLinearInterpolate(2, 4);
    });

    it('t=0 results in 2', () => {
      expect(linearInterpolator({ time: 0 })).toBe(2);
    });

    it('t<0 results in 2', () => {
      expect(linearInterpolator({ time: -1 })).toBe(2);
    });

    it('t=0.25 results in 2.5', () => {
      expect(linearInterpolator({ time: 0.25 })).toBe(2.5);
    });

    it('t=0.5 results in 3', () => {
      expect(linearInterpolator({ time: 0.5 })).toBe(3);
    });

    it('t=1 results in 4', () => {
      expect(linearInterpolator({ time: 1 })).toBe(4);
    });

    it('t>1 results in 4', () => {
      expect(linearInterpolator({ time: 100 })).toBe(4);
    });
  });
});
