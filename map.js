Array.prototype.mapIntoObject = function(keySelector, valueSelector) {
  return this.reduce((target, item) => {
    target[keySelector(item)] = valueSelector ? valueSelector(item) : item
    return target
  }, {})
}