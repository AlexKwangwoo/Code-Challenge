/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let numObject = {};
  for (let i = 0; i < nums.length; i++) {
    if (numObject[nums[i]]) {
      return true;
    } else {
      numObject[nums[i]] = true;
    }
  }

  return false;
};
