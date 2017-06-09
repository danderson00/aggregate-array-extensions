require('../nearestBound')

test("nearestUpperBound", () => {
  var source = [1, 2, 4, 8, 11, 32]
  expect(source.nearestUpperBound()).toBe(5)
  expect(source.nearestUpperBound(0)).toBe(-1)
  expect(source.nearestUpperBound(1)).toBe(0)
  expect(source.nearestUpperBound(2)).toBe(1)
  expect(source.nearestUpperBound(3)).toBe(1)
  expect(source.nearestUpperBound(9)).toBe(3)
  expect(source.nearestUpperBound(32)).toBe(5)
  expect(source.nearestUpperBound(100)).toBe(5)

  source = [1, 2, 4, 8, 11];
  expect(source.nearestUpperBound()).toBe(4)
  expect(source.nearestUpperBound(0)).toBe(-1)
  expect(source.nearestUpperBound(1)).toBe(0)
  expect(source.nearestUpperBound(2)).toBe(1)
  expect(source.nearestUpperBound(3)).toBe(1)
  expect(source.nearestUpperBound(9)).toBe(3)
  expect(source.nearestUpperBound(100)).toBe(4)
})

test("nearestLowerBound", () => {
  var source = [1, 2, 4, 8, 11, 32]
  expect(source.nearestLowerBound()).toBe(0)
  expect(source.nearestLowerBound(0)).toBe(0)
  expect(source.nearestLowerBound(1)).toBe(0)
  expect(source.nearestLowerBound(2)).toBe(1)
  expect(source.nearestLowerBound(3)).toBe(2)
  expect(source.nearestLowerBound(9)).toBe(4)
  expect(source.nearestLowerBound(12)).toBe(5)
  expect(source.nearestLowerBound(32)).toBe(5)
  expect(source.nearestLowerBound(100)).toBe(-1)

  var source = [1, 2, 4, 8, 11]
  expect(source.nearestLowerBound()).toBe(0)
  expect(source.nearestLowerBound(0)).toBe(0)
  expect(source.nearestLowerBound(1)).toBe(0)
  expect(source.nearestLowerBound(2)).toBe(1)
  expect(source.nearestLowerBound(3)).toBe(2)
  expect(source.nearestLowerBound(9)).toBe(4)
  expect(source.nearestLowerBound(100)).toBe(-1)
})

test("nearestUpperBound with selector", () => {
  var source = [{v:1},{v:2},{v:4},{v:8},{v:11},{v:32}]
  var selector = x => x.v
  expect(source.nearestUpperBound(2, selector)).toBe(1)
  expect(source.nearestUpperBound(3, selector)).toBe(1)
  expect(source.nearestUpperBound(9, selector)).toBe(3)
  expect(source.nearestUpperBound(100, selector)).toBe(5)
})

test("nearestUpperBound with dates", () => {
  var source = [
    new Date(2000, 1, 1),
    new Date(2000, 2, 1),
    new Date(2000, 3, 7),
    new Date(2000, 6, 1),
    new Date(2001, 1, 1)
  ]
  expect(source.nearestUpperBound(new Date(2000, 3, 7))).toBe(2)
  expect(source.nearestUpperBound(new Date(2000, 3, 8))).toBe(2)
  expect(source.nearestUpperBound(new Date(2000, 6, 2))).toBe(3)
  expect(source.nearestUpperBound(new Date(2002, 1, 1))).toBe(4)
})

test("findRange", () => {
  var source = [1, 2, 4, 8, 11, 32]
  expect(source.findRange()).toEqual(source)
  expect(source.findRange(1, 32)).toEqual(source)
  expect(source.findRange(0, 100)).toEqual(source)
  expect(source.findRange(2, 8)).toEqual([2, 4, 8])
  expect(source.findRange(3, 20)).toEqual([4, 8, 11])
  expect(source.findRange(7)).toEqual([8, 11, 32])
  expect(source.findRange(null, 7)).toEqual([1, 2, 4])
})

test("findRange with selector", () => {
  var source = [{x:1}, {x:2}, {x:4}, {x:8}, {x:11}, {x:32}]
  expect(source.findRange(1, 32, x => x.x)).toEqual(source)
  expect(source.findRange(0, 100, x => x.x)).toEqual(source)
  expect(source.findRange(2, 8, x => x.x)).toEqual([{x:2},{x:4},{x:8}])
  expect(source.findRange(3, 20, x => x.x)).toEqual([{x:4},{x:8},{x:11}])
  expect(source.findRange(7, null, x => x.x)).toEqual([{x:8},{x:11},{x:32}])
  expect(source.findRange(null, 7, x => x.x)).toEqual([{x:1},{x:2},{x:4}])
})