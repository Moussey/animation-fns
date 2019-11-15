import { Time, TimeTransformers } from '../time';
import { Reduce } from './reduce';

describe('Reduce', () => {
  it('Applies the converters in the given order', () => {
    const delay = TimeTransformers.Delay(10);
    const stretch = TimeTransformers.Stretch(2);
    const pipe = Reduce<Time>(delay, stretch);

    const time = 100;
    const convertedTime = pipe.convert({ time }).time;

    // expect the time to be converted to
    // (100 - 10) / 2

    expect(convertedTime).toBe(45);
  });
});
