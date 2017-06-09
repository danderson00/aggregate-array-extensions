require('../aggregate')

test("sum", () => {
  expect([1, 2, 3, 4].sum()).toBe(10)
  expect([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 }
  ].sum(x => x.value)).toBe(10)
})