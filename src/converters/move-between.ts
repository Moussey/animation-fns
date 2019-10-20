import {
  TimePositionConverter,
  Position,
  Time,
  distanceBetween
} from './old-model';
import { FullPipe, TimePipe } from './pipe';
import { Delay } from './delay';
import { TimeStretch } from './time/time-stretch';
import { LinearPositionInterpolator } from './linear-interpolator';
import { TimeHook } from './time/time-hook';

export const MoveBetween = (
  from: Position,
  to: Position,
  velocity: number,
  startAt: Time,
  doneHook?: () => void
): TimePositionConverter => {
  const distanceDelta = distanceBetween(from, to);
  const doneFn = doneHook ? doneHook : () => {};

  const convert = FullPipe({
    timeConverter: TimePipe([
      Delay(startAt.time),
      TimeStretch(distanceDelta / velocity),
      TimeHook(1, doneFn)
    ]),
    timePositionConverter: LinearPositionInterpolator(
      from.position,
      to.position
    )
  });

  return convert;
};
