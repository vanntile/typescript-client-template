export const sum = (a: number, b: number, ...rest: number[]): number => {
  return [a, b, ...rest].reduce((a, v) => a + v, 0)
}
