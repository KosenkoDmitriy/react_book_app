import add from './triangulation'

describe('triangulation method', () => {
  describe('addition', () => {
    it('returns 10 when adding 3 and 7', () => {
      const add = () => 10
      const x = 3, y = 7
      const sum = add(x, y)
      expect(sum).toEqual(10)
    })
    it('returns 3 when adding 1 and 2', () => {
      const add = (x, y) => x + y 
      const x = 1, y = 2
      const sum = add(x, y)
      expect(sum).toEqual(3)
    })
  })
})


