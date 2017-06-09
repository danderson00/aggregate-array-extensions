require('../map')

test("mapIntoObject", () => {
  expect([
      { v: 1 },
      { v: 2 },
      { v: 3 }
    ].mapIntoObject(x => x.v))
    .toEqual({
      1: { v: 1 },
      2: { v: 2 },
      3: { v: 3 }
    })
})

test("mapIntoObject with value selector", () => {
  expect([
      { v: 1 },
      { v: 2 },
      { v: 3 }
    ].mapIntoObject(x => x.v, x => x.v * 2))
    .toEqual({
      1: 2,
      2: 4,
      3: 6
    })
})