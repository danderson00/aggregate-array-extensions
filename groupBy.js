/* eslint-disable no-extend-native */
Array.prototype.groupBy = function(keySelector, elementSelector, aggregateTransform) {
  var result = this.reduce(function(hash, item) {
    var group = keySelector(item)
    var entry = (hash[group] = hash[group] || { key: group, value: [] })
    entry.value.push(elementSelector ? elementSelector(item) : item)
    return hash
  }, {})

  return Object.keys(result)
    .map(function(x) {
      return {
        key: result[x].key,
        value: aggregateTransform ? aggregateTransform(result[x].value) : result[x].value
      }
    })
}

Array.prototype.groupIntoObject = function(keySelector, elementSelector, aggregateTransform) {
  var result = this.reduce(function(hash, item) {
    var group = keySelector(item)
    var entry = (hash[group] = hash[group] || [])
    entry.push(elementSelector ? elementSelector(item) : item)
    return hash
  }, {})

  if(aggregateTransform)
    Object.keys(result).forEach(function(key) {
      return result[key] = aggregateTransform(result[key])
    })

  return result
}

// Array.prototype.aggregateGroups = function(aggregateTransform) {
//   var result = this.reduce((hash, firstGroup) => {
//     firstGroup.value.forEach(secondGroup => {
//       hash[secondGroup.key] = hash[secondGroup.key] || { key: secondGroup.key, value: [] }
//       hash[secondGroup.key].value.push(secondGroup)
//     })
//     return hash
//   }, {})

//   return Object.keys(result)
//     .map(x => ({
//       key: result[x].key,
//       value: aggregateTransform ? aggregateTransform(result[x].value) : result[x].value
//     }))
// }
