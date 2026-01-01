function pattern(n) {
  for (let i = 1; i < n; i++) {
    let row = "";
    for (let j = 1; j < n; j++) {
      // responsible for the single row
      row = row + "* ";
    }
    console.log(row);
  }
}
let res = pattern(6);
/**
 * output
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 */
function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      // responsible for the single row
      row = row + "*";
    }
    console.log(row);
  }
}
let result1 = pattern1(6);
console.log(result1);
/**
 *
 **
 ***
 ****
 *****
 ******
 */
function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      // responsible for the single row
      row = row + (j + 1);
    }
    console.log(row);
  }
}
let result2 = pattern2(6);
console.log(result2);
/**
 1
12
123
1234
12345
123456
 
 */
function pattern3(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (i + 1);
    } // responsible for the single row
    console.log(row);
  }
}
let result3 = pattern3(6);
console.log(result3);
/**
 * 
 * @param 
12
123
1234
12345
123456} n 
 */

function pattern4(n) {
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + i;
    } // responsible for the single row
    console.log(row);
  }
}
let result4 = pattern4(6);
console.log(result4);
/**
 * 
 * 1
22
333
4444
55555
666666
 */
function pattern5(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + i;
    } // responsible for the single row
    console.log(row);
  }
}

/**
 * 12345
 * 1234
 * 123
 * 12
 * 1
 *
 */

function patternReverse(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}
patternReverse(6);

/**
 * ****
 * ***
 * **
 * *
 */
function patternReverse(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
patternReverse(6);
/**
 *  _  _  _  _ *
 _  _  _ * *
 _  _ * * *
 _ * * * *
* * * * *
 */

function ultraPattern(n) {
  for (let i = 1; i < n; i++) {
    let row = "";
    for (let j = 1; j <= n - (i + 1); j++) {
      row = row + " _ ";
    }
    for (let k = 1; k < i + 1; k++) {
      row = row + "* ";
    }
    console.log(row);
  }
}
ultraPattern(6);

/**
 * 1
 * 10
 * 101
 * 1010
 * 10101
 * 101010
 */
function switchPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let val = 1;
    for (let j = 0; j <= i; j++) {
      row = row + val;
      if (val === 1) {
        val = 0;
      } else {
        val = 1;
      }
    }
    console.log(row);
  }
}
switchPattern(8);
/**
 * 
 * 1
01
010
1010
10101
010101
0101010
10101010} n 
 */


function ultraSwitchPattern(n) {
    let val = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    
    for (let j = 0; j <= i; j++) {
      row = row + val;
      if (val === 1) {
        val = 0;
      } else {
        val = 1;
      }
    }
    console.log(row);
  }
}
ultraSwitchPattern(8);



