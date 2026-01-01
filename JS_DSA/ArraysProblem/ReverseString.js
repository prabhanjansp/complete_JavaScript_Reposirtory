// need to reverse the given string without modifying the original string and do  not return

function revString(s) {
  let len = s.length;
  let halfLEn = Math.floor(len / 2);
  for (let i = 0; i < halfLEn; i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
}
let str = ["h", "e", "l", "l", "o"];
revString(str);
console.log(str);
