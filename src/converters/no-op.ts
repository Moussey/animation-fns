import { Transformer } from './converter';

export const NoOpTransform = <T>(): Transformer<T> => {
  const convert = (val: T): T => val;

  return { convert };
};
