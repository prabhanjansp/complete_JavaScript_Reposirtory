function charCount(str) {
  let res = {};
  for (let i = 0; i < str.length; i++) {
    // let  char=str[i]; //approaches 1
    let char = str[i].toLowerCase(); //approaches 2

    if (res[char] > 0) {
      res[char]++;
    } else {
      res[char] = 1;
    }
  }
  return res;
}
console.log(charCount(" hi am prabhanjan"));

/**** optimised solution */
// function charsCount(str) {
//   const obj = {};
//   for (const char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       obj[char] = ++obj[char] || 1;
//     }
//   }
//   return obj;
// }

function charsCount(str) {
  const obj = {};
  for (const char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

/** is alpha numeric     */
function isAlphaNumeric(str) {
  let code = char.charCodeAt(0);

  for (let i = 0, len = str.length; i < len; i++) {
    if (
      !(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123)
    ) {
      return false;
    }
  }
  return true;
}
isAlphaNumeric("BAdfbadf");
