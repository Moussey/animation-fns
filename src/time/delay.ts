import { Transformer } from '../converters/converter';
import { Time } from './time';

export const Delay = (amount: number): Transformer<Time> => {
  const convert = (val: Time): Time => {
    return { time: val.time - amount };
  };

  return { convert };
};
