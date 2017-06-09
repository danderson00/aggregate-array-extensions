# aggregate-array-extensions

## groupBy

    Array.prototype.groupBy = function(groupSelector, aggregateTransform)

```Javascript
expect([1, 2, 3, 4, 5]
  .groupBy(x => x % 2 === 0 ? 'even' : 'odd'))
  .toEqual([
    { key: 'odd', value: [1, 3, 5] },
    { key: 'even', value: [2, 4] }
  ])
```

## groupIntoObject

    Array.prototype.groupIntoObject = function(groupSelector, aggregateTransform)

```Javascript
expect([1, 2, 3, 4, 5]
  .groupIntoObject(x => x % 2 === 0 ? 'even' : 'odd'))
  .toEqual({ 
    odd: [1, 3, 5],
    even: [2, 4]
  })
```

## nearestUpperBound / nearestLowerBound

    Array.prototype.nearestUpperBound = function(value, selector)

```Javascript
var source = [1, 2, 4, 8, 11, 32]
expect(source.nearestUpperBound(0)).toBe(-1)
expect(source.nearestUpperBound(3)).toBe(1)
expect(source.nearestUpperBound(9)).toBe(3)
expect(source.nearestUpperBound(100)).toBe(5)
```

    Array.prototype.nearestLowerBound = function(value, selector)

```Javascript
  var source = [1, 2, 4, 8, 11, 32]
expect(source.nearestLowerBound(0)).toBe(0)
expect(source.nearestLowerBound(3)).toBe(2)
expect(source.nearestLowerBound(9)).toBe(4)
expect(source.nearestLowerBound(100)).toBe(-1)
```

## findRange

    Array.prototype.findRange = function(lower, upper, selector)

```Javascript
var source = [1, 2, 4, 8, 11, 32]
expect(source.findRange(1, 32)).toEqual(source)
expect(source.findRange(3, 20)).toEqual([4, 8, 11])
expect(source.findRange(7)).toEqual([8, 11, 32])
expect(source.findRange(null, 7)).toEqual([1, 2, 4])
```

## sum

    Array.prototype.sum = function(selector)

```Javascript
expect([1, 2, 3, 4].sum()).toBe(10)
```
