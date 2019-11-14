import { Converter } from '../converters/converter';
import * as R from 'ramda';

export const Connect = <From, Im, To>(
  first: Converter<From, Im>,
  second: Converter<Im, To>
): Converter<From, To> => {
  const convert = R.pipe(
    first.convert,
    second.convert
  );

  return { convert };
};
