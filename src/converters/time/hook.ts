import { Transformer } from '../converter';
import { Time } from './time';

export const Hook = (at: number, hook: () => void): Transformer<Time> => {
  let hookCalled = false;
  const convert = (val: Time): Time => {
    if (val.time >= at && !hookCalled) {
      hook();
      hookCalled = true;
    }
    return val;
  };

  return { convert };
};
