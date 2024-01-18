/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1 = nums1.filter((e) => e !== 0);
  nums2 = nums2.filter((e) => e !== 0);

  nums1 = nums1.concat(nums2).sort((a, b) => a - b);
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

let a = [1, 2, 3, 0, 0, 0];
console.log("result", a[8]);
