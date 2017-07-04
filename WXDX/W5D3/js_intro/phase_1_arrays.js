Array.prototype.uniq = function() {
  const unique = [];
  for (let i = 0; i < this.length; i++) {
    if (unique.indexOf(this[i]) === -1)
      unique.push(this[i]);
  }
  return unique;
};

Array.prototype.twoSum = function() {
  const pairs = [];
  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(-(this[i])) !== -1)

      pairs.push([this.indexOf(this[i]), this.indexOf(-(this[i]))]);
  }
  return pairs;
};

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
};

//decent i/j loop sol
Array.prototype.transpose = function() {
  const trans = [];
  for (let i = 0; i < this.length; i++) {
    trans.push([]);
      for (let j = 0; j < this[i].length; j++) {
        trans[i][j] = this[j][i];
      }
    }
  return trans;
};
//forEach scope problem?
Array.prototype.transpose = function() {
  const trans = [];
  let array = this;
    this.forEach(function(row, i) {
      trans.push([]);
        row.forEach(function(col, j) {
          trans[i][j] = array[j][i];
        });
    });
    return trans;
};
//Using ES6 notation nullifies scope problem
Array.prototype.transpose = function() {
  const trans = [];
    this.forEach((row, i) => {
      trans.push([]);
        row.forEach((col, j) => {
          trans[i][j] = this[j][i];
        });
    });
    return trans;
};
