/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = 0;
  nums.forEach((each, index) => {
    if (index % 2 === 0) {
      result += each;
    }
  });
  return result;
};
