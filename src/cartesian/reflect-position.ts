import { Transformer } from '../converters/converter';
import { CartesianPosition } from './cartesian';

export const ReflectX = (x?: number): Transformer<CartesianPosition> => {
  const convert = (val: CartesianPosition): CartesianPosition => {
    x = x || 0;
    const newX = (val.x - x) * -1 + x;
    return { x: newX, y: val.y };
  };

  return { convert };
};

export const ReflectY = (y?: number): Transformer<CartesianPosition> => {
  const convert = (val: CartesianPosition): CartesianPosition => {
    y = y || 0;
    const newY = (val.y - y) * -1 + y;
    return { x: val.x, y: newY };
  };

  return { convert };
};
