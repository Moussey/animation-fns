export interface Converter<From, To> {
  convert: (val: From) => To;
}

export interface Transformer<T> extends Converter<T, T> {}
