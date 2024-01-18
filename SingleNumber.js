/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.filter((e) => e === nums[i]).length === 1) {
      return nums[i];
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(4 ^ 4);
