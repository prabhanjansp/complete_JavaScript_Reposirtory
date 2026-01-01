// WAF to search an element in an array and return its index if found else return -1
function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (x == arr[i]) {
      return i;
    }
  }
  return -1; //the reason behind writing out the loop statement is not finding the element in the array and i have to display it as -1
}
let result = searchElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);
console.log(result);
// WAF to count the negative numbers in an array
function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let result1 = countNegativeNumbers([1, -2, 3, -4, 5, -6, -7, 8, 9]);
console.log(result1);

//find the largest element in the array
function findLargestNumber(arr) {
  // let largest=-1;
  let largest = -Infinity; //this is the correct way to solve the bug
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
let result2 = findLargestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result2);
// largest =-1 is buggy part to solve there are two ways
// 1) largest=-Infinity
// 2) largest=arr[0] and start the loop from i=1

//WAF to find the smallest element in the array
function findSmallestNumber(arr) {
  let smallest = Infinity; //this is the correct way to solve the bug
  // let smallest=99999; //this is a buggy part
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
let result3 = findSmallestNumber([1, 2, 3, 4, 5, 6, 7, 8, -9]);
console.log(result3);
//WAF to find the second largest element in the  array
// let arr=[4,9,0,2,8,7,15,6,3]

function secondLargestNumber(arr) {
    if(arr.length < 2) {
        return null; // Not enough elements for second largest
    }
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let output = secondLargestNumber([4]);
console.log(output);