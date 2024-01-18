/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let nextNum = 0;
  let currentText = "";
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      nextNum = nums[i];
      currentText = nums[i] + "";
    }
    if (nums[i + 1] === nextNum + 1) {
    } else {
      if (currentText + "" !== nums[i] + "") {
        currentText += `->${nums[i]}`;
      }
      result.push(currentText + "");
      currentText = nums[i + 1];
    }

    nextNum = nums[i + 1];
  }
  return result;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
