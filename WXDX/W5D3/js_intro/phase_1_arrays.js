Array.prototype.uniq = function() {
  unique = []
  let lens = this.length
  for (let i = 0; i < lens; i++) {
    if (unique.indexOf(this[i]) == -1)
      unique.push(this[i])
  }
  return unique
}

Array.prototype.twoSum = function() {
  pairs = []
  let lens = this.length
  for (let i = 0; i < lens; i++) {
    if (this.indexOf(-(this[i])) != -1)

      pairs.push([this.indexOf(this[i]), this.indexOf(-(this[i]))])
  }
  return pairs
}

Array.prototype.twoSum = function() {
  const pairs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
}

Array.prototype.transpose = function() {
  tmatrix = []
  let lens = this.length
  for (let i = 0; i < lens; i++) {
    tmatrix[i].push([a
  }
}
