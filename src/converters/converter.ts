export interface Converter<From, To> {
  convert: (val: From) => To;
}

export interface Adapter<T> extends Converter<T, T> {}
