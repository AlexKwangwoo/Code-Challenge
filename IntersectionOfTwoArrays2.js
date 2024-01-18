/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let result = [];

  nums1.forEach((each) => {
    for (let i = 0; i < nums2.length; i++) {
      if (nums2[i] >= 0 && each === nums2[i]) {
        result.push(nums2[i]);
        nums2[i] = -1;
        break;
      }
    }
  });

  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));

// best answer
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const result = [];
  const map = {};
  for (num of nums1) {
    if (map[num]) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }

  for (num of nums2) {
    if (map[num] > 0) {
      result.push(num);
      map[num]--;
    }
  }
  return result;
};
