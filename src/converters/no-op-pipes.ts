import { Converter } from './converter';
import { Time, CartesianPosition } from './model';

export const constantTimePosition = (
  position: Position
): Converter<Time, CartesianPosition> => {
  const convert = () => position;

  return { convert };
};
