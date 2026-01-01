var a = 10;
function b() {
  var x = 25;
}

console.log(window.a);
console.log(this.a);
console.log(a)
console.log(window===this)