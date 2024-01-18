/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  var set = new Set(nums);
  var array = [...set];

  // set.forEach((each) => array.push(each));

  if (array.length === 1) {
    return array[0];
  }
  array.sort((a, b) => b - a);
  if (array.length === 2) {
    return array[0];
  } else if (array.length > 2) {
    return array[2];
  }
};

console.log("testing", thirdMax([2, 2, 3, 1]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax2 = function (nums) {
  var uniq = [...new Set(nums)];
  if (uniq.length === 2) return Math.max(uniq[1], uniq[0]);
  if (uniq.length === 1) return uniq[0];

  return uniq.sort((a, b) => b - a)[2];
};
