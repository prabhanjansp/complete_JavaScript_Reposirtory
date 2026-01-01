// function x() {
//   console.log("Namaste"); //callback function
// }
// function y(x) {
//   //higher order function
//   x();
// }
// const radius = [4, 3, 2, 1];
// const calculateAreaOfCircle = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(calculateAreaOfCircle(radius));
// const calculateCircumferenceOfCircle = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };
// console.log(calculateCircumferenceOfCircle(radius));

// const calculateDiameterOfCircle = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//       output.push(2 * radius[i]);
//     }
//     return output;
//   };
//   console.log(calculateDiameterOfCircle(radius));

const radius = [4, 3, 2, 1];
const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference=function(radius){
    return 2* Math.PI*radius
}
Array.prototype. calculate=function(radius,logic) // our interpretation of map
{
    const output=[]
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
        
    }
    return output
}
console.log(radius.map(area))
console.log(calculate(radius,area))
console.log(calculate(radius,circumference))