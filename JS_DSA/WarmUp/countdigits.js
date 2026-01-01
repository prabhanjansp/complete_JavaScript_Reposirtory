//write a function that returns the count of the digits in a given number
function countDigits(number) {
  if (number == 0) {
    return 1;
  }
  number=Math.abs(number);
  let count = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }
  return count;
}
let result = countDigits(231564874);
console.log(result);
