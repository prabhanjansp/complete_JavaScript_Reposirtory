for (let index = 0; index < 5; index++) {
  console.log(index);
}
// addition of even numbers between 1 tp 100
let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
    // console.log(sum);
  }
}
console.log(sum);

let langages = "JavaScript";
for (let str = 0; str < langages.length; str++) {
  console.log(langages.charAt(str));
}
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 3; j++) {
    console.log("row", i, "col", j);
  }
}
// break and continue
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break; // skip the rest of the loop when i is 5
  }
  console.log(i);
}
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue; // skip the rest of the loop when i is 5
  }
  console.log(i);
}

// multiple counters for single loop
for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log(i, j);
}

let rows=5;
let pattern="";
for(let i=1;i<=rows;i++){
    for(let j=1;j<=i;j++){
        pattern+="*";
    }
    pattern+="\n";
}
console.log(pattern)

// while loop:  runs as long as the condition is true and its best used when the number of iterations is not known beforehand.

let count = 0;
while (count<5) {
    console.log(count);
    count++;
}

// do -while loop:  runs at least once and then checks the condition, making it useful when you want to ensure the loop body executes at least once.
/**
 * do{
 *  console.log(count);
 * }while(count<5);
 */

let count2 = 0;
do {
    console.log(count2);
    count2++;
} while (count2 < 5);