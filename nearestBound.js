/* eslint-disable no-extend-native */
// these extensions require the array to be sorted by the selector
Array.prototype.nearestUpperBound = function(value, selector) {
  return nearestBound(this, value, true, selector)
}

Array.prototype.nearestLowerBound = function(value, selector) {
  return nearestBound(this, value, false, selector)
}

Array.prototype.findRange = function(lower, upper, selector) {
  var lowerBound = this.nearestLowerBound(lower, selector)
  if(lowerBound === -1) return [];
  var upperBound = this.nearestUpperBound(upper, selector)
  if(upperBound === -1) return [];

  return this.slice(lowerBound, upperBound + 1)
}

function nearestBound(source, value, upper, selector) {
  var minIndex = 0, maxIndex = source.length - 1, currentIndex, currentValue

  if(source.length === 0)
    return -1

  if(value === undefined || value === null)
    return upper ? source.length - 1 : 0

  if((upper && value < valueAt(0)) || (!upper && value > valueAt(source.length - 1)))
    return -1

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0
    currentValue = valueAt(currentIndex)

    if (currentValue < value)
      minIndex = currentIndex + 1
    else if (currentValue > value)
      maxIndex = currentIndex - 1
    else
      return currentIndex
  }

  return upper
    ? Math.min(currentIndex, maxIndex)
    : Math.max(currentIndex, minIndex)

  function valueAt(index) {
    return selector ? selector(source[index]) : source[index]
  }
}