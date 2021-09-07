export type Dict<T> = {
  [key: string]: T | undefined;
};

const d: Dict<number> = {
  abc: 34,
  ghf: 234,
  als: 234
}

// Array.prototype.map, but for Dict
export function mapDict<T, S>(dict: Dict<T>,
  fn: (arg: T, idx: number) => S): Dict<S> {

  let out: Dict<S> = {};
  Object.keys(dict).forEach((k, i) => {
    const thisItem = dict[k]
    if (typeof thisItem !== 'undefined') {
      out[k] = fn(thisItem, i);
    }
  });
  return out;
}

// Array.prototype.reduce, but for Dict
export function reduceDict() { }
