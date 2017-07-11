// range(start, end) - receives a start and end value, returns an array from start up to end

function range(start, end) {
  newRange = [];
  if (end - start === 0) return newRange;
  newRange.push(range(start + 1, end));
  return newRange;
}

newRange.push(start, end)

function countup(start, end) {
  console.log(start);
  if (end === start) return end;
  countup(start + 1, end);
}

function range(start, end) {
  newRange = [];
  newRange.push(start);
  if (start === end) return newRange;
  range(start + 1, end);
  }

function range(start, end) {
  newRange = [];
  if (start === end) return end;
  newRange.push(start + 1);
  return range(start + 1, end);
}

////////////sol
function range(start, end) {
  if (start === end) {
    return [];
  }

  let r = range(start + 1, end);
  r.push(start + 1);
  return r;
}

function range(start, end) {
  newRange = [];
  console.log(newRange)
  newRange.push(start);
  if (start === end) {
    newRange.push(start);
    return newRange;
  }
  newRange.push(range(start + 1, end));
}

function range(start, end) {
  const newRange = [];
  newRange.push(start);
  if (start === end) return newRange;
  range(start + 1, end);
}

r = range(start + 1, end);
newRange.push(r)

const range = (x, y) => x < y ? [x].concat(range(x + 1, y)) : [];


function range(start, end) {
  if (start >= end) return [];
  return [start].concat(range(start + 1, end));
}

function range(start, end) {
  start >= end ? return []; : return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
if (arr.length < 1) return [];
return arr[arr.length - 1] + sumRec(arr.slice(0, arr.length - 1));
}

function recFac(n) {
  if (n === 1) return n;
  return n * recFac(n - 1);
}

function recSum(arr) {
  if (arr.length <= 1) return arr[0];
  return arr[arr.length - 1] + recSum(arr.slice(0, arr.length - 1));
}

function recSum(arr) {
  if (arr.length === 0) return 0;
}

function recExp(base, exp) {
  if (exp === 1) return base;
    return base * recExp(base, exp - 1)
}

function recExp(base, exp) {
  if (exp === 1) return base;
  if (exp % 2 == 0) {

  } else {

  }
  return base * recExp(base, exp - 1)
}

fibonacci(n) {
fibs = [];
if (n === 0) return [];
if (n === 1) return [0];
fibs.push(fibonacci[n - 2] + fibonacci[n - 1]); fibonacci(n - 1);
}

function fibonacci(n) {
  fibs = [];
  if (n === 0) return [0];
  if (n === 1) return [1];
  return fibs.concat(fibonacci(n - 2) + fibonacci(n - 1)) + fibonacci(n - 1);
  fibonacci(n) = fibonacci(n-2) + fibonacci(n - 1);
  [0, 1].concat(fibonacci(n - 1))
}

fibs.push

function fibonacci(n) {
fibs = [];
if (n === 1) return [0];
if (n === 2) return [1];
fibs.push(fibonacci(n - 2) + fibonacci(n - 1));
console.log(fibs);
return fibonacci(n - 1);
};

function fibonacci(n) {
  if (n < 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let fibs = fibonacci(n - 1);
  fibs.push(fibonacci(n-2) + fibonacci(n-1));
}

function fibsRec(n) {
  if (n < 3) {
    return [0, 1].slice(0, n);
  }

  let fibs = fibsRec(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

  return fibs;
}

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return [0].concat(fibonacci(n - 2) + fibonacci(n - 1));
}

mergesort(arr) {

}
