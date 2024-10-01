/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let newString = t;

  for (let i = 0; i < s.length; i++) {
    console.log("test", t.indexOf(s[i]));
    if (newString.indexOf(s[i]) < 0) {
      return false;
    } else {
      newString = newString.replace(s[i], "");
    }
  }
  return true;
};

console.log("result", isAnagram("aacc", "ccac"));
