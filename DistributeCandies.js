/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  let totalCanEat = candyType.length / 2;
  let map = {};
  for (let i = 0; i < candyType.length; i++) {
    if (map[candyType[i]]) {
      map[candyType[i]] += map[candyType[i]];
    } else {
      map[candyType[i]] = 1;
    }
  }

  if (totalCanEat >= Object.keys(map).length) {
    return Object.keys(map).length;
  } else {
    return totalCanEat;
  }
};

console.log(distributeCandies([1, 1, 2, 3]));
