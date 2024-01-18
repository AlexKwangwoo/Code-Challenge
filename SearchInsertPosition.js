/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let lo = 0,
    hi = nums.length; // we might need to inseart at the end
  while (lo < hi) {
    // breaks if lo == hi
    let mid = lo + Math.floor((hi - lo) / 2); // always gives the lower mid
    if (target > nums[mid]) {
      lo = mid + 1; // no way mid is a valid option
    } else {
      hi = mid; // it might be possibe to inseart @ mid
    }
  }
  return lo;
};

console.log("searchInsert", searchInsert([1, 3, 5, 6], 5));

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function (nums, target) {
//   let currentIndex = Math.floor(nums.length / 2);

//   while (true) {
//     let check = currentIndex;
//     if (nums[currentIndex] > target) {
//       if (Math.floor(currentIndex / 2) === 0) {
//         return 0;
//       } else {
//         currentIndex += Math.floor(currentIndex / 2);
//       }
//     } else if (nums[currentIndex] < target) {
//       if (Math.floor(currentIndex / 2) === 0) {
//         return 1;
//       } else {
//         currentIndex += Math.floor(currentIndex / 2);
//       }
//     } else if (nums[currentIndex] === target) {
//       break;
//     }
//     if (check === currentIndex) {
//       break;
//     }
//   }
//   return currentIndex;
// };

// console.log("searchInsert", searchInsert([1, 3, 5, 6], 5));
