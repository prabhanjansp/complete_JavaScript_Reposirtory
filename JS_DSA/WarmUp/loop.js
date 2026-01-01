// for(let i=1;i<=20;i++){
//     console.log(` hello ${i}`);
// }
// for(let i=3;i<=30;i=i+3){
//     console.log(` hello ${i*5+25}`);
// }
// for (let u = 2; u < 9; u = u + 2) {
//   console.log(`${u} no of times`);
// }
// for (let i = 5; i > 0; i = i - 1) {
//   console.log(i);
// }
// for (let i = 5; i < 4; i++) {
//   console.log(i);
// }
// for(let t=1;t>0;t++)
// {
//     console.log(t);
// }
let arr = [4, 7, 1, 6, , 0, 2, 9];
// console.log(arr[3]);
// let len =arr.length;
// console.log(len);
// for(let o=0;o<arr.length;o++){
//     console.log(arr[o]);
// }
// for(let r=0;r<arr.length;r++){
//     if(arr[r]%2==0){
//         console.log(arr[r]);
//     }
// }
// let i=0
// while(i<6){
//     console.log(i);
//     i++
// }
const key = parseInt(prompt("enter the key"));
for (let i = 1; i <= 10; i++) {
  let prouct = key * i;
  console.log(`${key} * ${i} = ${prouct}`);
}
