import { Repeat } from './repeat';
import { Transformer } from '../converter';
import { Time } from './time';

describe('Repeat', () => {
  describe('For a valid interval', () => {
    let timeRepeat: Transformer<Time>;

    beforeEach(() => {
      timeRepeat = Repeat(2, 8);
    });

    it('A time inside the interval is itself', () => {
      const time = 5;
      const convertedTime = timeRepeat.convert({ time }).time;

      expect(convertedTime).toBe(time);
    });

    it('A time before the interval is itself', () => {
      const time = 1;
      const convertedTime = timeRepeat.convert({ time }).time;

      expect(convertedTime).toBe(time);
    });

    it('A time after the interval is set inside the interval', () => {
      const time = 10;
      const convertedTime = timeRepeat.convert({ time }).time;

      expect(convertedTime).toBe(4);
    });
  });

  describe('For an invalid interval', () => {
    it('Throws exception', () => {
      expect(() => Repeat(8, 2)).toThrowError();
    });
  });
});
