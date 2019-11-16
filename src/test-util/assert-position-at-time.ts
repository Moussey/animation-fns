import { Converter } from '../converters';
import { Time } from '../time';
import { CartesianPosition } from '../cartesian';

export type AssertPositionAtTime = (time: number, x: number, y: number) => void;

export const assertPositionAtTime = (
  converter: Converter<Time, CartesianPosition>
) => (time: number, x: number, y: number) => {
  const position = converter.convert({ time });
  expect(position).toEqual({ x, y });
};
