import { CartesianPosition } from './cartesian';
import { Converter } from '../converters/converter';
import { Time } from '../time';
import { Scalar } from '../scalar';

export const LinearInterpolate = (
  start: CartesianPosition,
  end: CartesianPosition
): Converter<Time, CartesianPosition> => {
  const xConvert = Scalar.BoundedLinearInterpolate(start.x, end.x);
  const yConvert = Scalar.BoundedLinearInterpolate(start.y, end.y);

  const convert = (time: Time): CartesianPosition => {
    const x = xConvert.convert(time);
    const y = yConvert.convert(time);
    return { x, y };
  };

  return { convert };
};
