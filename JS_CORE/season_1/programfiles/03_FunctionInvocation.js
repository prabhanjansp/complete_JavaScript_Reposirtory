var z=100;
a(); //hoisting
b(); // hoisting
console.log(z)

function a(){
    var z=10;
    console.log(z)
}
function b(){
    var z=20;
    console.log(z)
}