import { LinearInterpolate } from '../linear-interpolator';
import { CartesianPosition } from './cartesian';
import { Converter } from '../converter';
import { Time } from '../time/time';

export const CartesianPositionLinearInterpolate = (
  start: CartesianPosition,
  end: CartesianPosition
): Converter<Time, CartesianPosition> => {
  const convert = (time: Time): CartesianPosition => {
    const x = LinearInterpolate(start.x, end.x)(time);
    const y = LinearInterpolate(start.y, end.y)(time);
    return { x, y };
  };

  return { convert };
};
