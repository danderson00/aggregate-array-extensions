# aggregate-array-extensions

## groupBy

    Array.prototype.groupBy = function(keySelector, elementSelector, aggregateTransform)

Parameter|Description
-|-
keySelector|Function that returns a value to group on
elementSelector|Function that is applied to each element of each group
aggregateTransform|Function that is applied to each group at the end of processing

```Javascript
expect([1, 2, 3, 4, 5]
  .groupBy(x => x % 2 === 0 ? 'even' : 'odd'))
  .toEqual([
    { key: 'odd', value: [1, 3, 5] },
    { key: 'even', value: [2, 4] }
  ])
```

## groupIntoObject

    Array.prototype.groupIntoObject = function(keySelector, elementSelector, aggregateTransform)

Parameter|Description
-|-
keySelector|Function that returns a value to group on
elementSelector|Function that is applied to each element of each group
aggregateTransform|Function that is applied to each group at the end of processing

```Javascript
expect([1, 2, 3, 4, 5]
  .groupIntoObject(x => x % 2 === 0 ? 'even' : 'odd'))
  .toEqual({ 
    odd: [1, 3, 5],
    even: [2, 4]
  })
```

## nearestUpperBound

    Array.prototype.nearestUpperBound = function(value, selector)

Parameter|Description
-|-
value|Value to find nearest upper bound for
selector|Function to select the bounded value. The array must be sorted by this value.

```Javascript
var source = [1, 2, 4, 8, 11, 32]
expect(source.nearestUpperBound(0)).toBe(-1)
expect(source.nearestUpperBound(3)).toBe(1)
expect(source.nearestUpperBound(9)).toBe(3)
expect(source.nearestUpperBound(100)).toBe(5)
```

## nearestLowerBound
    Array.prototype.nearestLowerBound = function(value, selector)

Parameter|Description
-|-
value|Value to find nearest lower bound for
selector|Function to select the bounded value. The array must be sorted by this value.

```Javascript
  var source = [1, 2, 4, 8, 11, 32]
expect(source.nearestLowerBound(0)).toBe(0)
expect(source.nearestLowerBound(3)).toBe(2)
expect(source.nearestLowerBound(9)).toBe(4)
expect(source.nearestLowerBound(100)).toBe(-1)
```

## findRange

    Array.prototype.findRange = function(lower, upper, selector)

Parameter|Description
-|-
lower|The lower bound
upper|The upper bound
selector|Function to select the bounded value. The array must be sorted by this value.

```Javascript
var source = [1, 2, 4, 8, 11, 32]
expect(source.findRange(1, 32)).toEqual(source)
expect(source.findRange(3, 20)).toEqual([4, 8, 11])
expect(source.findRange(7)).toEqual([8, 11, 32])
expect(source.findRange(null, 7)).toEqual([1, 2, 4])
```

## sum

    Array.prototype.sum = function(selector)

Parameter|Description
-|-
selector|Function to select the value to sum

```Javascript
expect([1, 2, 3, 4].sum()).toBe(10)
```

## mapIntoObject

    Array.prototype.mapIntoObject = function(keySelector, valueSelector)

Parameter|Description
-|-
keySelector|Function to select the key on the result object
valueSelector|Function to select the value to assign

```Javascript
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
```