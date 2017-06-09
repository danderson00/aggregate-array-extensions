require('../groupBy')

test("groupBy", () => {
  expect([1, 2, 3, 4, 5]
    .groupBy(x => x % 2 === 0 ? 'even' : 'odd'))
    .toEqual([
      { key: 'odd', value: [1, 3, 5] },
      { key: 'even', value: [2, 4] }
    ])
})

test("groupBy preserves key", () => {
  expect([
      new Date(2000, 1, 1),
      new Date(2000, 2, 1),
      new Date(2001, 1, 1),
    ]
    .groupBy(x => new Date(x.getFullYear(), 0, 1)))
    .toEqual([
      { key: new Date(2000, 0, 1), value: [new Date(2000, 1, 1), new Date(2000, 2, 1)] },
      { key: new Date(2001, 0, 1), value: [new Date(2001, 1, 1)] }
    ])
})

test("groupBy applies aggregate transform", () => {
  expect([1, 2, 3, 4, 5]
    .groupBy(x => x % 2 === 0 ? 'even' : 'odd', x => x.reduce((sum, value) => sum + value, 0)))
    .toEqual([
      { key: 'odd', value: 9 },
      { key: 'even', value: 6 }
    ])
})

test("groupIntoObject", () => {
  expect([1, 2, 3, 4, 5]
    .groupIntoObject(x => x % 2 === 0 ? 'even' : 'odd'))
    .toEqual({ 
      odd: [1, 3, 5],
      even: [2, 4]
    })
})

test("groupIntoObject applies aggregate transform", () => {
  expect([1, 2, 3, 4, 5]
    .groupIntoObject(x => x % 2 === 0 ? 'even' : 'odd', x => x.reduce((sum, value) => sum + value, 0)))
    .toEqual({
      odd: 9,
      even: 6
    })
})

// test("aggregateGroups", () => {
//   var source = [
//     { day: 1, hour: 1, value: 1 },
//     { day: 1, hour: 2, value: 2 },
//     { day: 1, hour: 3, value: 3 },
//     { day: 2, hour: 1, value: 1 },
//     { day: 2, hour: 2, value: 1 }
//   ].groupBy(x => x.day, group => group.groupBy(x => x.hour))

//   expect(source.aggregateGroups(x => x.map(y => y.value))).toEqual([
//     { key: 1, value: [1, 1]},
//     { key: 2, value: [2, 1]},
//     { key: 3, value: [3]}
//   ])
// })