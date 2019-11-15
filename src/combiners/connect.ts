import { Converter } from '../converters/converter';

export const Connect = <From, Im, To>(
  first: Converter<From, Im>,
  second: Converter<Im, To>
): Converter<From, To> => {
  const convert = (from: From) => {
    return second.convert(first.convert(from));
  };

  return { convert };
};
