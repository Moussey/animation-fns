import { Transformer, Converter } from './converter';
import { noOpTransform } from './no-op';
import * as R from 'ramda';

export const FullPipe = <From, To>(params: {
  fromTransform?: Transformer<From>;
  converter: Converter<From, To>;
  toTransform?: Transformer<To>;
}): Converter<From, To> => {
  const convert = (val: From): To => {
    const fromTransform = params.fromTransform || noOpTransform<From>();
    const toTransform = params.toTransform || noOpTransform<To>();

    return R.pipe(
      fromTransform.convert,
      params.converter.convert,
      toTransform.convert
    )(val);
  };

  return { convert };
};

export const Reduce = <T>(
  ...transformers: Transformer<T>[]
): Transformer<T> => {
  const convert = (val: T): T =>
    transformers.reduce((v, t) => t.convert(v), val);

  return { convert };
};
