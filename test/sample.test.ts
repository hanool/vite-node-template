import { describe, expect, test } from 'vitest'
import { add, helloWorld } from 'sample'

describe('test sample', () => {
  describe(`test sample method helloWorld()`, () => {
    const helloWorldString = 'Hello, World!'
    test(`returns "${helloWorldString}"`, () => {
      expect(helloWorld()).toBe(helloWorldString)
    })
  })
  describe(`test sample method add()`, () => {
    test(`1 + 2 is 3`, () => {
      expect(add(1, 2)).toBe(3)
    })
  })
})
