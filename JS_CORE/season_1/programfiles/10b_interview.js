//basic closure program
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()(); //output 10
// 1st () will return the inner function  then using second will call the return function
//********************************************* */

// Q1) will the below code  still forms closure?

function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}
outer()();
// yes it will work same bcoz the inner function will form closure with the outer function env so the sequence dose not matter

// Q2) changing var to let will it make any diff

function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }
  return inner;
}
outer()();

//   still works same with TDZ

// Q3) will the inner function have the access  to outer function argument

function outer(str) {
  var a = 10;
  function inner() {
    console.log(a, str);
  }
  return inner;
}
outer()("hello world"); //10 hello world
// inner function now  will form closure and will have access to both and str

// Q4) will inner form  closure with outest
function outest() {
  var c = 100;
  function outer(str) {
    var a = 10;
    function inner() {
      console.log(a, str, c);
    }
    return inner;
  }
  return outer;
}
outest()("string")();

// inner will have access to all its outer env
//  Q5) output of below code and explain
function outest() {
  var c = 100;
  function outer(str) {
    var a = 10;
    function inner() {
      console.log(a, str, c);
    }
    return inner;
  }
  return outer;
}
let a = 1000;

outest()("string")();
//  name conflicting won't affect here output will be same the inner function will have the reference to a inner a

// Q6) advantages of having closure
/**
 * module design pattern
 * currying
 * memorize
 * data hiding and encapsulation
 * setTimeout
 */

// Q7) discuss more on data hiding and encapsulation
//without closure
var count = 10;
function counter() {
  count++;
  console.log(count);
}
//  here anyone can access the count variable

function counter() {
  var count = 10;
  function incrementCOunter() {
    count++;
    console.log(count);
  }
}
// console.log(count )
// this line will produce an reference error that count can't be accessed

function counter() {
  var count = 10;
  return function incrementCOunter() {
    count++;
    console.log(count);
  };
}
var c1=counter();
c1() //11
c1() //12
var c2=counter(); 
/**
 * here c2 han whole new copy of the counter function and it won't impact the output of the 1st function
 */
c2() //11
c2() //12
c2() //13
c2() //14
// Q7) is code is scalable

/**
 *to make scalable we need to use the constructor function

 *

 */
 function counter() {
    var count = 10;
    this.incrementCounter=function(){
        count++;
        console.log(count)
    }
     this.decrementCounter=function(){
        count--;
        console.log(count) 
     }
   
  }
  var c1= new counter();
  c1.incrementCounter() //11
  c1.incrementCounter() //12
  c1.decrementCounter() //12
//   var c2=counter(); 