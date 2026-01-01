function x(){
    var a=7;
    function y(){
        console.log(a) //100
    }
    // here we are accessing the reference to the variable a returned means the reference to the a persist
    // concepts of stack memory
    a=100;
    // y();
    return y;
}
var z=x();
console.log(z);
z();