/* eslint-disable no-extend-native */
Array.prototype.sum = function(selector) {
  return this.reduce((sum, item) => sum + (selector ? selector(item) : item), 0)
}