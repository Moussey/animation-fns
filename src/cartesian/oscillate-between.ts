import { CartesianPosition } from './cartesian';
import { Converter } from '../converters';
import { Time, TimeTransformers } from '../time';
import { timeBetween } from './util';
import { Reduce, Connect } from '../combiners';
import { LinearInterpolate } from './linear-interpolate';

export const OscillateBetween = (
  from: CartesianPosition,
  to: CartesianPosition,
  speed: number,
  startAt: number
): Converter<Time, CartesianPosition> => {
  const timeTaken = timeBetween(from, to, speed);
  const timeConvert = Reduce(
    TimeTransformers.Delay(startAt),
    TimeTransformers.Stretch(timeTaken),
    TimeTransformers.Repeat(0, 2),
    TimeTransformers.Reverse(1)
  );
  const positionConvert = LinearInterpolate(from, to);

  return Connect(timeConvert, positionConvert);
};
