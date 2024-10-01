/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let result = [];

  words.forEach((each, index) => {
    if (each.indexOf(x) >= 0) {
      result.push(index);
    }
  });

  return result;
};

console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
