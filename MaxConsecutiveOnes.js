/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  if (nums.length === 1 && nums[0] === 1) {
    return 1;
  }
  if (nums.length === 1 && nums[0] === 0) {
    return 0;
  }
  let max = 0;
  let current = 0;
  nums.forEach((each, index) => {
    if (each === 1) {
      current++;
    } else if (each === 0) {
      if (max < current) {
        max = current;
      }
      current = 0;
    }
  });

  if (max < current) {
    max = current;
  }

  return max;
};

console.log("test", findMaxConsecutiveOnes([1]));
