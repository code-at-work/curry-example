const curry = require('../src')

describe("Curry", () => {
  it("", () => {
    const sum = curry((a,b) => a+b)

    expect(sum(1)(1)).toEqual(2)
  })

  it("", () => {
    const sum = curry((a,b) => a+b)
    const inc = sum(1)

    expect(inc(1)).toEqual(2)
  })

  it("", () => {
    const subtract = curry((a,b) => a-b)

    expect(subtract(1)(1)).toEqual(0)
  })

  it("", () => {
    const lt = curry((a,b) => a<b)

    const is_greater_than_3 = lt(3)

    expect(is_greater_than_3(4)).toEqual(true)
  })
})

