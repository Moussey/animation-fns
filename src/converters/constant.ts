import { Converter } from './converter';

export const constantConverter = <_, To>(val: To): Converter<_, To> => {
  const convert = (): To => val;

  return { convert };
};
