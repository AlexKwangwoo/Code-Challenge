/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = 0;
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i >= k) {
      current -= nums[i - k];
      current += nums[i];
      if (max < current) {
        max = current;
      }
    } else {
      max += nums[i];
      current += nums[i];
    }
  }

  return max / k;
};

console.log("findMaxAverage", findMaxAverage([1, 12, -5, -6, 50, 3], 4));
