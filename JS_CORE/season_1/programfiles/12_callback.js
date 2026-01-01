/**
 * what is callback function is javascript
 *
 * javascript is synchronous and single threaded language
 *
 * blocking the main thread
 *
 * power of callbacks
 *
 * deep about event listeners
 *
 * closure demo with event listeners
 *
 * scope demo with event listeners
 *
 * garbage collection and remove event listeners
 */
// 1)

// setTimeout(function () {
//   console.log("first-timer");
// }, 5000);
// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });
function attachEventListener() { //closure demo example of data encapsulation
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count);
  });
}
attachEventListener();  
