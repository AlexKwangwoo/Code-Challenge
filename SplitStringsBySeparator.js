/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */

var splitWordsBySeparator = function (words, separator) {
  let result = [];
  words.forEach((each) => {
    let temp = each.split(separator);
    temp = temp.filter((each) => each !== "");
    result.push(...temp);
  });

  return result;
};

console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."));
