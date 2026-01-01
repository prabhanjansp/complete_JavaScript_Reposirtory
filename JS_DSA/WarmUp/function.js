function printHelloWorld() {
    console.log("Hello, World!");
}

printHelloWorld();  
// This will output: Hello, World!

function greet(name) {
    return `Hello, ${name}!`;
    //name is the variable that holds the name to be greeted
}   
console.log(greet("Alice"));
console.log(greet("Bob"));// functions can be reused with different arguments
// This will output: Hello, Alice!

function add(a, b) {
    return a + b;
    //a and b are the parameters that hold the numbers to be added
}   
console.log(add(5, 3));
// This will output: 8

function multiply(x, y) {
    return x * y;
    //x and y are the parameters that hold the numbers to be multiplied
}   
console.log(multiply(4, 7));
// This will output: 28

function square(n) { 
    return n * n;
    //n is the parameter that holds the number to be squared
}
// now i need my value to be returned
console.log(square(6));
// This will output: 36

//to display the returned value of a function, you can use console.log() or assign it to a variable
let result = add(10, 15);
console.log(result); 
// This will output: 25

function isElegibleToVote(age) {
    if (age <1) {
        console.log("Not a valid age");
    }
    else if (age < 18) {
        console.log("Not elegible to vote");
    } else {
        console.log("Elegible to vote");
    }
}
isElegibleToVote(20);
isElegibleToVote(16);
console.log(isElegibleToVote(25)); // please do identify why undefined is coming
// This will output: Elegible to vote
// This will output: Not elegible to vote
// This will output: Elegible to vote
// The last call outputs undefined because the function does not return a value, it only logs to the console.
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }       
}
console.log(isEvenOrOdd(10)); 
console.log(isEvenOrOdd(7)); 
// This will output: Even
// This will output: Odd