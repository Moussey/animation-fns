import { Converter, NoOpTransform } from '../converters';
import { CartesianPosition } from './cartesian';
import { Time, TimeTransformers } from '../time';
import { Reduce, Connect } from '../combiners';
import { LinearInterpolate } from './linear-interpolate';

export const MoveBetween = (
  from: CartesianPosition,
  to: CartesianPosition,
  speed: number,
  startAt: number,
  onDone?: () => void
): Converter<Time, CartesianPosition> => {
  const distanceBetween = Math.sqrt(
    Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2)
  );
  const timeTaken = distanceBetween / speed;
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
