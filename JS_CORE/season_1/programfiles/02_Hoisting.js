// getName();
// console.log(x)
// console.log(getName)  // will return the function defintion

var x=9;
function getName(name) {
    console.log("Namaste Javascript")
}
getName();
console.log(x)
console.log(getName)  // will return the function defintion

// hoisting in javascript is the phenomena where you can able to access the values and function  before it gets initialize because of the execution context which will be initialised in the beginning
// line number two will be  undefined
// if i comment that line will get the referrence error which is not defined
// undefined  and not defined are not same inthe javascript

// if i declare a function  in any other way  i ll get in theGEC is Undefined
// var num=function(){}
// or
// const name=()=>{

// }
// eventually it will become another variable and will just allocate memory in the GEC