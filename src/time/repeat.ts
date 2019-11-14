import { Transformer } from '../converters/converter';
import { Time } from './time';

export const Repeat = (start: number, end: number): Transformer<Time> => {
  if (end <= start) {
    throw Error('For Repeat pipe, end must be after start');
  }

  const convert = (val: Time): Time => {
    const intervalSize = end - start;
    if (val.time < start) {
      return val;
    }
    const newTime = ((val.time - start) % intervalSize) + start;

    return { time: newTime };
  };

  return { convert };
};
