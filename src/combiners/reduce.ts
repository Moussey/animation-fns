import { Transformer } from '../converters/converter';

export const Reduce = <T>(
  ...transformers: Transformer<T>[]
): Transformer<T> => {
  const convert = (val: T): T =>
    transformers.reduce((v, t) => t.convert(v), val);

  return { convert };
};
