export default <T>(array: T[]) => array.filter((x, i, self) => self.indexOf(x) === i);
