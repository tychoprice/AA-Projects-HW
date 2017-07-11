const NUMS = [1, 2, 3, 4, 5];

//myEach
Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

//anonymous function passed as argument
NUMS.myEach(function(num) {
  console.log(num * num);
});

//example callback function
function printOdds(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

//function passed as argument
NUMS.myEach(printOdds); // => 2, 4


Array.prototype.myEach = (callback) => {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

NUMS.myEach(function(num) {
  console.log(num * num);
});

//myMap
Array.prototype.myMap = function(callback) {
  const mapped = [];
  this.myEach(el => mapped.push(callback(el)));
  return mapped;
};
NUMS.myMap(num => num * num * num); //ES6
NUMS.myMap(function cubed(num) { return num * num * num; });

//myReduce

Array.prototype.myReduce = function(callback, initialValue = this[0]) {
  let arr = this;
  let result = initialValue;
  arr.myEach(el => result = callback(result, el));
  return result;
};

NUMS.myReduce();
