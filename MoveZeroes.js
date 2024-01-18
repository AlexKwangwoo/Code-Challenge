/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let current = 0;
  for (let i = 0; i < nums.length - 1 - current; i++) {
    for (let j = 0; j < nums.length - 1 - current; j++) {
      if (nums[j] === 0) {
        let tNum = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tNum;
      }
    }
  }
  return nums;
};

console.log(moveZeroes([0, 0, 0, 3, 12]));

// for (let j = i + 1; j < nums.length; j++) {
//   let tNum = nums[j - 1];
//   nums[j - 1] = nums[j];
//   nums[j] = tNum;
// }
