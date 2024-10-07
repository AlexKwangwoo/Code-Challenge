/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let newWord = s;
  for (let i = 0; i < t.length; i++) {
    if (newWord.indexOf(t[i]) < 0) {
      return t[i];
    } else {
      newWord = newWord.replace(t[i], "");
    }
  }
  return true;
};

var findTheDifference2 = function (s, t) {
  let s_sum = 0;
  let t_sum = 0;
  for (let i of s) {
    s_sum += i.charCodeAt(0);
  }
  for (let i of t) {
    t_sum += i.charCodeAt(0);
  }
  return String.fromCharCode(t_sum - s_sum);
};

console.log("findTheDifference", findTheDifference("", "y"));
