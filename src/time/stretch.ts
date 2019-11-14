import { Transformer } from '../converters/converter';
import { Time } from './time';

/**
 * Scales the time by factor
 * @param factor
 */
export const Stretch = (factor: number): Transformer<Time> => {
  const convert = (val: Time): Time => {
    return { time: val.time / factor };
  };

  return { convert };
};
