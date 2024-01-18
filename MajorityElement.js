/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let check = {};
  let keyValue;
  let highest;
  for (let i = 0; i < nums.length; i++) {
    console.log("check", check);
    if (check.hasOwnProperty(nums[i])) {
      check[nums[i]] += 1;
    } else {
      check[nums[i]] = 0;
    }
  }

  for (const [key, value] of Object.entries(check)) {
    if (!keyValue || highest < value) {
      keyValue = key;
      highest = value;
    }
  }

  return keyValue;
};

console.log("majorityElement", majorityElement([2, 2, 1, 1, 1, 2, 2]));
