import { Transformer } from './converter';
import { Time } from './model';

export const Delay = (amount: number): Transformer<Time> => {
  const convert = (val: Time): Time => {
    return { time: val.time - amount };
  };

  return { convert };
};
