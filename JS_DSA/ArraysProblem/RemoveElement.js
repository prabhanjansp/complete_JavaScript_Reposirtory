function removeElement(nums, val) {
  let x = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== val) {
      nums[x] = nums[index];
      x = x + 1;
    }
  }
  return x;
}
let res = removeElement([3,1,3,3,4,3,3,3,7], 3);
//  here x will return non 3 elements count
console.log(res);
