//slower appraoch

function add(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
let t1 = performance.now();
console.log(add(1000000000));
let t2 = performance.now();
console.log(`time taken to  complete the task ${(t2 - t1) / 1000} seconds`);
/************************************************************************************* */
// faster apprach
function addSum(n) {
  return (n * (n + 1)) / 2;
}
let t11 = performance.now();
console.log(addSum(1000000000));
let t22 = performance.now();
console.log(`time taken to  complete the task ${(t22 - t11) / 1000} seconds`);

/** count up and down */
function upAndDown(n) {
  console.log("going up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("at the top and going down");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("back down");
}

function printallParis(n){
    for (let i = 0; i < n; i++){
        for(let j=0;j<=n;j++)
        {
            console.log(i,j)
        }
    }
}
console.log(printallParis(10))

/************************************************ */
function logAtleast5(n){
  for(let i=0;i<=Math.max(5,n);i++){
    console.log(i)
  }
}
console.log(logAtleast5(10))

/************************************************ */
function logAtleast55(n){
  for(let i=0;i<=Math.min(5,n);i++){
    console.log(i)
  }
}
console.log(logAtleast55(10))