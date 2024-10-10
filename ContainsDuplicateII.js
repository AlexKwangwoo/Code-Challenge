/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let result = {};
  let final = false;
  nums.some((each, index) => {
    if (result[each] >= 0 && index - result[each] <= k) {
      final = true;
      return true;
    } else if (result[each] >= 0 && index - result[each] > k) {
      result[each] = index;
    } else if (!result[each]) {
      result[each] = index;
    }
  });

  return final;
};
