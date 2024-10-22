/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const returnCurrentIndex = (left, right) => {
  return Math.floor((left + right) / 2);
};

var search = function (nums, target) {
  let left = 0;
  let right = nums.length;
  let currentIndex = returnCurrentIndex(left, right);

  let result;

  // while
  while (result === undefined) {
    if (nums[currentIndex] === target) {
      result = currentIndex;
    } else if (left + 1 === right) {
      result = -1;
    } else if (nums[currentIndex] > target) {
      right = currentIndex;
      currentIndex = returnCurrentIndex(left, right);
    } else if (nums[currentIndex] < target) {
      left = currentIndex;
      currentIndex = returnCurrentIndex(left, right);
    }
  }

  return result;
};
