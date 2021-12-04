import { add, divide, multiply, substract } from './calc'

describe('calculator', () => {

  describe('should perform addition', () => {
    it('adds two positive numbers', () => {
      expect(add(1, 2)).toEqual(3)
    })
    it('adds two negative numbers', () => {
      expect(add(-1, -2)).toEqual(-3)
    })
    it('adds one negative and one positive numbers', () => {
      expect(add(-1, 1)).toEqual(0)
    })
  })

  describe('should perform substraction', () => {
    it('subsctracts two positive numbers', () => {
      expect(substract(1, 1)).toEqual(0)
    })
  })

  describe('should perform multiplication', () => {
    it("multiply two positive numbers", () => {
      expect(multiply(1, 1)).toEqual(1)
    })
    it("multiply two negative numbers", () => {
      expect(multiply(-1, -1)).toEqual(1)
    })
  })

  describe('should perform division', () => {
    it("divide two positive numbers", () => {
      expect(divide(1, 1)).toEqual(1)
      expect(divide(10, 5)).toEqual(2)
    })
    it("divide positive number on zero", () => {
      expect(divide(1, 0)).toEqual(Infinity)
    })
    it("divide zero on number", () => {
      expect(divide(0, 1)).toEqual(0)
    })
  })
})