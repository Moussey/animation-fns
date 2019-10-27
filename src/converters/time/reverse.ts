import { Transformer } from '../converter';
import { Time } from './time';

export const Reverse = (after: number): Transformer<Time> => {
  const convert = (val: Time): Time => {
    if (val.time < after) {
      return val;
    } else {
      return { time: 2 * after - val.time };
    }
  };

  return { convert };
};
