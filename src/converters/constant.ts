import { Converter } from './converter';

export const ConstantConverter = <_, To>(val: To): Converter<_, To> => {
  const convert = (): To => val;

  return { convert };
};
