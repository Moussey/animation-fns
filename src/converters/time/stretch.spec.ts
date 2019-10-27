import { Stretch } from './stretch';

describe('Stretch', () => {
  it('Stretches time by the given factor', () => {
    const time = 100;
    const timeStretch = Stretch(200);
    const convertedTime = timeStretch.convert({ time }).time;
    expect(convertedTime).toBe(0.5);
  });
});
