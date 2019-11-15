import { Converter } from '../converters';
import { Time } from '../time';

export const BoundedLinearInterpolate = (
  from: number,
  to: number
): Converter<Time, number> => {
  const convert = ({ time }: Time) => {
    if (time >= 1) {
      return to;
    }
    if (time <= 0) {
      return from;
    }
    return time * (to - from) + from;
  };

  return { convert };
};
