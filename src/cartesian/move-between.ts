import { Converter, NoOpTransform } from '../converters';
import { CartesianPosition } from './cartesian';
import { Time, TimeTransformers } from '../time';
import { Reduce, Connect } from '../combiners';
import { LinearInterpolate } from './linear-interpolate';
import { timeBetween } from './util';

export const MoveBetween = (
  from: CartesianPosition,
  to: CartesianPosition,
  speed: number,
  startAt: number,
  onDone?: () => void
): Converter<Time, CartesianPosition> => {
  const timeTaken = timeBetween(from, to, speed);
  const hookTransform = onDone
    ? TimeTransformers.Hook(1, onDone)
    : NoOpTransform<Time>();
  const timeConvert = Reduce(
    TimeTransformers.Delay(startAt),
    TimeTransformers.Stretch(timeTaken),
    hookTransform
  );
  const positionConvert = LinearInterpolate(from, to);

  return Connect(timeConvert, positionConvert);
};
