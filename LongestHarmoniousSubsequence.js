/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let num_object = {};
  let result = 0;
  nums.forEach((each, index) => {
    if (num_object[each]) {
      num_object[each]++;
    } else {
      num_object[each] = 1;
    }
  });

  Object.keys(num_object).forEach((key, index) => {
    if (index !== 0) {
      let previous = num_object[parseInt(key) - 1];
      let current = num_object[key];
      let next = num_object[parseInt(key) + 1];

      if (previous && current + previous > result) {
        result = current + previous;
      }
      if (next && current + next > result) {
        result = current + next;
      }
    }
  });

  return result;
};

console.log("findLHS", findLHS([-1, 0, -1, 0, -1, 0, -1]));

/**
 * @param {number[]} nums
 * @return {number}
 */
function findLHS2(nums) {
  let map = new Map();
  let res = 0;

  // count number of occurences for each number in array
  for (const num of nums) {
    // add 1 or set to 1 if number hasn't been seen before.
    map.set(num, map.get(num) + 1 || 1);
  }

  // iterate over hashmap
  for (const [key, value] of map) {
    // harmonious values must have a max difference of 1. so we check for the key + 1
    if (map.has(key + 1)) {
      // set the max
      res = Math.max(res, map.get(key + 1) + map.get(key));
    }
  }

  return res;
}
