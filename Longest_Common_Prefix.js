/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs?.length === 1) {
    return strs[0];
  }
  var result = "";
  var min;
  for (let i = 0; i < strs.length; i++) {
    if (i === 0) {
      min = strs[i].length;
    }
    if (min > strs[i].length) {
      min = strs[i].length;
    }
  }
  if (min === 0) {
    return "";
  }

  for (let i = 0; i < min; i++) {
    var thisTime;
    for (let j = 0; j < strs.length; j++) {
      if (j === 0) {
        thisTime = strs[j][i];
      } else {
        if (thisTime !== strs[j][i]) {
          return result;
        }
      }
    }
    if (thisTime) {
      result += thisTime;
    }
  }

  return result;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["ab", "a"]));
