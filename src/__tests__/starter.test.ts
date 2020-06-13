import { sum } from '../starter'

let testValues: number[]

beforeAll(() => {
  testValues = [0, 2, 2323, -34.34]
})

test('sum with two numbers', () => {
  expect(sum(testValues[0], testValues[1])).toBe(2)
})
