/**
 * function statement
 * 
 * function expression
 * 
 * function declaration
 * 
 * Anonymous functions
 * 
 * named function expression
 * 
 * difference between parameter and arguments
 * 
 * first class function && First class citizens
 * 
 * arrow function
 */

// function statement && function declaration
a();
b(); // will through an not defined error   
function a() {
    console.log("a is called")
}
// function expression
var b= function(){
    console.log("b is called")

}
//Anonymous functions
// function(){
    // according to the rules of the ecma scripts
    // will give the syntax error 
    // /function statements require a function name 
// }

// named function expression
var c=function abc(){
    console.log("abc")
}
c();
abc();

var g=function(param1){
    return function lol(params) {
        
    }
}
console.log(g())  // will return the function definition