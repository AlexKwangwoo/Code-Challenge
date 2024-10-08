/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);
  let a = nums[0] * nums[1] * nums[2];
  let b = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
  let c = nums[0] * nums[1] * nums[nums.length - 1];
  let d = nums[0] * nums[nums.length - 1] * nums[nums.length - 2];
  return Math.max(a, b, c, d);
};

console.log("test", maximumProduct([-1, -2, -3]));
