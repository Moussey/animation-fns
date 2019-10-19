import { TimeConverter, Time } from './old-model';

export const Delay = (amount: number): TimeConverter => {
  const convert = (val: Time): Time => {
    return { time: val.time - amount };
  };

  return { convert };
};
