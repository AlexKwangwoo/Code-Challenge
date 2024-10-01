/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  let result = true;
  if (words.length !== s.length) {
    return false;
  }
  words.every((each, index) => {
    if (each[0] !== s[index]) {
      result = false;
      return false;
    } else {
      return true;
    }
  });

  return result;
};

console.log("isAcronym", isAcronym(["an", "apple"], "a"));
console.log([..."string"]);
