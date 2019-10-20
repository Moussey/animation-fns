import { Delay } from '../time/delay';
import { TimeStretch } from '../time/time-stretch';
import { Reduce } from '../pipe';
import { Time } from '../time/time';

describe('Reduce', () => {
  it('Applies the converters in the given order', () => {
    const delay = Delay(10);
    const stretch = TimeStretch(2);
    const pipe = Reduce<Time>(delay, stretch);

    const time = 100;
    const convertedTime = pipe.convert({ time }).time;

    // expect the time to be converted to
    // (100 - 10) / 2

    expect(convertedTime).toBe(45);
  });
});
