function x() {
  //   var i = 1;
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("My name is js");
}
x();
// 6 6 6 6 6

function x() {
  //   var i = 1;
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("My name is js");
}
x();
//   1 2 3 4 5

function x() {
  //   var i = 1;
  for (var i = 1; i <= 5; i++) {
    function close() {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i)
  }
  console.log("My name is js");
}
x();
