import { Transformer } from './converter';

export const noOpTransform = <T>(): Transformer<T> => {
  const convert = (val: T): T => val;

  return { convert };
};
