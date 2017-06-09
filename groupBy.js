/* eslint-disable no-extend-native */
Array.prototype.groupBy = function(groupSelector, aggregateTransform) {
  var result = this.reduce(function(hash, item) {
    var group = groupSelector(item)
    var entry = (hash[group] = hash[group] || { key: group, value: [] })
    entry.value.push(item)
    return hash
  }, {})

  return Object.keys(result)
    .map(x => ({
      key: result[x].key,
      value: aggregateTransform ? aggregateTransform(result[x].value) : result[x].value
    }))
}

Array.prototype.groupIntoObject = function(groupSelector, aggregateTransform) {
  var result = this.reduce(function(hash, item) {
    var group = groupSelector(item)
    var entry = (hash[group] = hash[group] || [])
    entry.push(item)
    return hash
  }, {})

  if(aggregateTransform)
    Object.keys(result).forEach(key => result[key] = aggregateTransform(result[key]))

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
