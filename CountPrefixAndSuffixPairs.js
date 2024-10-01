/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  // words.forEach((each,index)=>{
  //   each.
  // })
  let result = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i].length <= words[j].length) {
        console.log("l", words[j].substring(0, words[i].length));
        console.log(
          "r",
          words[j].substring(words[j].length - words[i].length, words[j].length)
        );
        if (
          words[j].substring(0, words[i].length) === words[i] &&
          words[j].substring(
            words[j].length - words[i].length,
            words[j].length
          ) === words[i]
        ) {
          result += 1;
        }

        // best answer
        // if (w[j].startsWith(w[i]) && w[j].endsWith(w[i]))count++
      }
    }
  }
  return result;
};

console.log(
  "countPrefixSuffixPairs",
  countPrefixSuffixPairs(["a", "aba", "ababa", "aa"])
);

console.log("aba".splice("1"));
