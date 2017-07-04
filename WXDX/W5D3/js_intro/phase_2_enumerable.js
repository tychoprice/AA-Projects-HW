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
  for (let i = 0; i < this.length; i++) {
    mapped.push(callback(this[i]));
  }
  return mapped;
};

NUMS.myMap(function cubed(num) {
  return num * num * num;
});
