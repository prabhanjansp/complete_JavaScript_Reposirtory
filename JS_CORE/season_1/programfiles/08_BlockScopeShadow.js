var a=100
let b=1000;

{
  var a = 2; // this will override
  let b = 3;
  const c = 4;
  console.log(a) //2
  console.log(b) //3
  console.log(c)
 
}

console.log(a) //2
console.log(b) //1000
console.log(c)


const n=10;
{
    const n=199;
    {
        console.log(n)  //199
        const n=299;
        console.log(n) //299
    }
    console.log(n) //10
}
//  it follows the lexical scope chain pattern