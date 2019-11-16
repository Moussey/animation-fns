import { CartesianPosition } from './cartesian';

export const timeBetween = (
  from: CartesianPosition,
  to: CartesianPosition,
  speed: number
): number => {
  const distanceBetween = Math.sqrt(
    Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2)
  );
  return distanceBetween / speed;
};
