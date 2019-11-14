import { BoundedTimeLinearInterpolate } from '../converters';
import { CartesianPosition } from './cartesian';
import { Converter } from '../converters/converter';
import { Time } from '../time/time';

export const LinearInterpolate = (
  start: CartesianPosition,
  end: CartesianPosition
): Converter<Time, CartesianPosition> => {
  const convert = (time: Time): CartesianPosition => {
    const x = BoundedTimeLinearInterpolate(start.x, end.x)(time);
    const y = BoundedTimeLinearInterpolate(start.y, end.y)(time);
    return { x, y };
  };

  return { convert };
};
