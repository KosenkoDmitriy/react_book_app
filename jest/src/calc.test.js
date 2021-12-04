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
    it('multiply two positive numbers', () => {
      expect(multiply(1, 1)).toEqual(1)
    })
    it('multiply two negative numbers', () => {
      expect(multiply(-1, -1)).toEqual(1)
    })
  })

  describe('should perform division', () => {
    it('divide two positive numbers', () => {
      expect(divide(1, 1)).toEqual(1)
      expect(divide(10, 5)).toEqual(2)
    })
    it('divide positive number on zero', () => {
      expect(divide(1, 0)).toEqual(Infinity)
    })
    it('divide zero on number', () => {
      expect(divide(0, 1)).toEqual(0)
    })
  })

  it('basic usage', () => {
    expect(2 + 2).toBe(4)
    expect('Equality').toBe('Equality')
    expect({ name: 'Equality' }).toEqual({ name: 'Equality' })
    expect(1 + 4).not.toBe(1)
  })
  describe('reqular expressions', () => {
    it('match regular expression', () => {
      expect('string').toMatch(/\w+/)
    })
    it('match numbers', () => {
      expect('8-989-123-45-67').toMatch(/^\d{1}-\d{3}-\d{3}-\d{2}-\d{2}$/)
      expect('+7-989-123-45-67').not.toMatch(/^\d{1}-\d{3}-\d{3}-\d{2}-\d{2}$/)
    })
  })

  it('compare numbers', () => {
    expect(1 + 2).toBeGreaterThan(2)
    expect(1 + 1).toBeGreaterThanOrEqual(2)
    
    expect(1 + 2).toBeLessThan(4)
    expect(1 + 2).toBeLessThanOrEqual(3)
  })

  describe('toContain', () => {
    const users = ['Alice', 'Kate', 'Mary']
    it('match arrays', () => {
      expect(users).toContainEqual('Alice')
      expect(users).toContain(users[0])
    })
    it('object in array', () => {
      const users = [
        { name: 'Alice' },
        { name: 'Kate' },
      ]
      expect(users).toContainEqual({ name: 'Alice' })
      expect(users).not.toContain({ name: 'Mary' })
    })
  })

  it('match object', () => {
    const user = { name: 'Alice', email: 'test@email.com' }
    expect(user.name).toBeDefined()
    expect(user.phone).not.toBeDefined()
  })

  it('string contains', () => {
    const givenName = expect.stringContaining('Alice A')
    expect('Alice Alison').toEqual(givenName)
  })

  describe('array', () => {
    const users = ['Alice', 'Kate', 'Mary']
    it('array containing', () => {
      const userSet = expect.arrayContaining(['Mary', 'Alice'])
      expect(users).toEqual(userSet)
    })

    it('matcher test', () => {
      const user = {
        name: 'Alice Alison',
        customers: [
          { name: 'Customer One' },
          { name: 'Customer Two' },
        ]
      }
      const matcher = expect.objectContaining({
        name: expect.stringContaining('Alice'),
        customers: expect.arrayContaining([
          { name: expect.stringContaining('Customer') }
        ])
      })
      expect(user).toEqual(matcher)
    })
  })
  
})
