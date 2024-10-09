/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let result;
  let max = Math.max(...nums);

  nums.some((each, index) => {
    if (each !== max && each * 2 > max) {
      result = -1;
      return true;
    } else if (max === each) {
      result = index;
    }
  });

  return result;
};

console.log("domi", dominantIndex([3, 6, 1, 0]));
