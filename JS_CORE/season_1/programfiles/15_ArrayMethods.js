const arr = [5, 1, 3, 2, 6];
function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}
function binary(x) {
  return x.toString(2);
}
const output = arr.map(double);
const output1 = arr.map(triple);
const output2 = arr.map(binary);
console.log(output);
console.log(output1);
console.log(output2);

function isOdd(x) {
  return x % 2;
}
function isEven(x) {
  return x % 2 === 0;
}
function greaterThan4(x) {
  return x > 4;
}
const res = arr.filter(isOdd);
console.log(res);
const res1 = arr.filter(isEven);
console.log(res1);
const res3 = arr.filter(greaterThan4);
console.log(res3);

// *************************************************************
// reducer
function findSum(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));

const total = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log("reducer", total);
//************************************************************* */
function findMax() {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));
/************************************************************** */
const res4 = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);
console.log(res4);
