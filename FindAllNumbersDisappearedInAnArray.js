/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  var mapObject = {};
  var result = [];

  for (let i = 0; i < nums.length; i++) {
    if (!mapObject[nums[i]]) {
      mapObject[nums[i]] = 1;
    }
  }

  for (let i = 1; i < nums.length + 1; i++) {
    if (mapObject[i] !== 1) {
      result.push(i);
    }
  }

  return result;
};

console.log("findD", findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
