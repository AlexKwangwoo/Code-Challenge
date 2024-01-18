/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let total = {};
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < alpha.length; i++) {
    total[alpha[i]] = widths[i];
  }
  let number = 0;
  let line = 1;
  for (let i = 0; i < s.length; i++) {
    if (number + total[s[i]] > 100) {
      line += 1;
      number = total[s[i]];
    } else {
      number += total[s[i]];
    }
  }
  return [line, number];
};
