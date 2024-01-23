/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const medals = score.sort((a, b) => b - a);
  console.log(" score.slice()", score.slice());
  console.log("medalsmedals", medals);

  let result = [];
  for (let i = 0; i < score.length; i++) {
    let number = 0;
    for (let j = 0; j < score.length; j++) {
      if (score[i] <= score[j]) {
        number += 1;
      }
    }

    if (number === 1) {
      result.push("Gold Medal");
    } else if (number === 2) {
      result.push("Silver Medal");
    } else if (number === 3) {
      result.push("Bronze Medal");
    } else {
      result.push("" + number);
    }
  }
  return result;
};

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks2 = function (score) {
  const medals = score.slice().sort((a, b) => b - a);
  const newarr = [];
  let map = new Map();

  medals.forEach((val, idx) => {
    idx += 1;
    if (idx === 1) map.set(val, "Gold Medal");
    else if (idx === 2) map.set(val, "Silver Medal");
    else if (idx === 3) map.set(val, "Bronze Medal");
    else map.set(val, `${idx}`);
  });

  score.forEach((val) => {
    newarr.push(map.get(val));
  });

  return newarr;
};

console.log("result", findRelativeRanks([10, 3, 8, 9, 4]));
