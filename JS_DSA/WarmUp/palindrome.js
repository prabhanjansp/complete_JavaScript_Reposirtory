//write a function that is palindrome or not
//12121
// to find last digit n%10
// to remove last digit Math.floor(n/10)
function isPalindrome(number) {
  if (number < 0) {
    return false; // negative corner case
  }
  let rev = 0;
  let numberCopy = number;
  while (number > 0) {
    rem = number % 10;
    rev = 10 * rev + rem;
    number = Math.floor(number / 10);
  }
//   if (rev === numberCopy) {
//     return true;
//   } else {
//     return false;
//   }
return rev === numberCopy; // one more way to check the condition directly
}
let result = isPalindrome(123321);
console.log(result);
