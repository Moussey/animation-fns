import { Converter } from './converter';
import { CartesianPosition } from './cartesian/cartesian';
import { Time } from './time/time';

export namespace LinearInterpolator {
  const interpolate = (a: number, b: number) => ({ time }: Time): number => {
    if (time >= 1) {
      return b;
    }
    if (time <= 0) {
      return a;
    }
    return time * (b - a) + a;
  };

  export const Scalar = (
    start: number,
    end: number
  ): Converter<Time, number> => {
    const interpolator = interpolate(start, end);

    return { convert: interpolator };
  };

  export const CartesianPosition = (
    start: CartesianPosition,
    end: CartesianPosition
  ): Converter<Time, CartesianPosition> => {
    const convert = (time: Time): CartesianPosition => {
      const x = interpolate(start.x, end.x)(time);
      const y = interpolate(start.y, end.y)(time);
      return { x, y };
    };

    return { convert };
  };
}
