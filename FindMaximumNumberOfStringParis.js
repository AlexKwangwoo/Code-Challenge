/**
 * @param {string[]} words
 * @return {number}
 */

var maximumNumberOfStringPairs = function (words) {
  let result = 0;
  words.forEach((first) => {
    if (
      first[1] !== first[0] &&
      words.filter((each) => each === `${first[1]}${first[0]}`).length === 1
    ) {
      result++;
    }
  });
  return result / 2;
};

console.log(maximumNumberOfStringPairs(["aa", "ab"]));
