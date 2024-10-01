/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let hash = {};
  nums.forEach((each) => {
    hash[each] = true;
  });
  for (let i = 0; i < nums.length + 1; i++) {
    if (!hash[i]) {
      return i;
    }
  }
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
