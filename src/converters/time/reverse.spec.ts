import { Transformer } from '../converter';
import { Time } from './time';
import { Reverse } from './reverse';

describe('Reverse', () => {
  let reverse: Transformer<Time>;
  const reverseAt = 5;

  beforeEach(() => {
    reverse = Reverse(reverseAt);
  });

  it('Time below reverseAt is unaffected', () => {
    const time = 1;
    const transformed = reverse.convert({ time }).time;

    expect(transformed).toBe(time);
  });

  it('Time equal to reverseAt is unaffected', () => {
    const time = reverseAt;
    const transformed = reverse.convert({ time }).time;

    expect(transformed).toBe(time);
  });

  it('Time after reverseAt is reversed', () => {
    const time = reverseAt + 1;
    const transformed = reverse.convert({ time }).time;

    expect(transformed).toBe(reverseAt - 1);
  });
});
