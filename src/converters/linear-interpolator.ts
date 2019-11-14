import { Time } from '../time/time';

export const LinearInterpolate = (a: number, b: number) => ({
  time
}: Time): number => {
  if (time >= 1) {
    return b;
  }
  if (time <= 0) {
    return a;
  }
  return time * (b - a) + a;
};

export namespace LinearInterpolator {}
