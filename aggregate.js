/* eslint-disable no-extend-native */
Array.prototype.sum = function(selector) {
  return this.reduce(function (sum, item) {
    return sum + (selector ? selector(item) : item)
  }, 0)
}