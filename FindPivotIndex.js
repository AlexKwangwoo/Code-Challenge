/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let result = -1;
  let left = 0;
  let right = nums.reduce((partialSum, a) => partialSum + a, 0);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      right -= nums[i];
    } else {
      left += nums[i - 1];
      right -= nums[i];
    }

    if (left === right) {
      result = i;
      return result;
    }
  }
  return result;
};
