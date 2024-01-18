/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let result = [];
  let length = s.length;
  let cLocation = [];
  for (let i = 0; i < length; i++) {
    if (s[i] === c) {
      cLocation.push(i);
    }
  }

  for (let i = 0; i < length; i++) {
    let temp = length - 1;
    for (let j = 0; j < cLocation.length; j++) {
      let result = Math.abs(i - cLocation[j]);
      if (temp >= result) {
        temp = result;
      }
    }
    result.push(temp);
  }
  return result;
};

console.log(shortestToChar("loveleetcode", "e"));
