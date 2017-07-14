//sum
function sum(array) {
  let arr = Array.from(array);
  let sums = 0;
  arr.forEach(el => {
    sums += el;
  });
  return sums;
}

//sum with rest params
function sum2(...numArray) {
  numArray.reduce(function(acc, value) {
    return acc + value;
  });
}

sum2(1,2,3,4,5);

[1,2,3,4,5].reduce(function(total, el) {
  return total + el;
});

function sum2(...numArray) {
  let total = 0;
  numArray.forEach(el => {
    total += el;
  });
  return total;
}

function sum2(...numArray) {
  let total = 0;
  numArray.reduce((acc, value) => {
    acc + value;
  });
  return total;
}
