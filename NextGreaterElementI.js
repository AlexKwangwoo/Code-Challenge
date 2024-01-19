// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var nextGreaterElement = function (nums1, nums2) {
//   var result = [];
//   for (let i = 0; i < nums1.length; i++) {
//     result.push(-1);
//     for (let j = 0; j < nums2.length; j++) {
//       if (
//         j < nums2.length - 1 &&
//         nums1[i] === nums2[j] &&
//         nums1[i] < nums2[j + 1]
//       ) {
//         result[i] = nums2[j + 1];
//       }
//     }
//   }
//   return result;
// };

var nextGreaterElement = function (nums1, nums2) {
  var result = [];
  for (let i = 0; i < nums1.length; i++) {
    let checking = -1;
    let find = false;
    for (let j = 0; j < nums2.length; j++) {
      if (find && nums1[i] < nums2[j]) {
        checking = nums2[j];
        find = false;
        continue;
      }

      if (nums1[i] === nums2[j]) {
        find = true;
      }
    }
    result.push(checking);
  }
  return result;
};

console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
