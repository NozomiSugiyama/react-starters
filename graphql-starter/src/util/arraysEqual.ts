export default <T>(a: T[], b: T[]) =>
    a.length !== b.length ? false
  : a.every((x, i) => x === b[i]);
