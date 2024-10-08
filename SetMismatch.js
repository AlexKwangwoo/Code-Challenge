/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let set = {};
  let duplicatedNum;
  let removedNum;
  nums.forEach((each, index) => {
    if (set[each]) {
      set[each]++;
      duplicatedNum = each;
    } else {
      set[each] = 1;
    }
  });

  nums.forEach((value, index) => {
    if (!set[index + 1]) {
      removedNum = index + 1;
    }
  });

  return [+duplicatedNum, removedNum];
};

console.log("findErrorNums", findErrorNums([1, 1]));
