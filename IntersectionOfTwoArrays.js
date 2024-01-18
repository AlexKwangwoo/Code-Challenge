/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let result = [];
  let nums1Set = new Set(nums1);
  let nums2Set = new Set(nums2);

  nums2Set.forEach((each) => {
    if (nums1Set.has(each)) {
      result.push(each);
    }
  });

  return result;
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
