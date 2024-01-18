/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let firstLetter = needle[0];
  let remember = -1;
  for (let i = 0; i < haystack.length; i++) {
    if (firstLetter === haystack[i]) {
      remember = i;
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          remember = -1;
          break;
        }
      }
      if (remember !== -1) {
        return remember;
      }
    }
  }
  return remember;
};

console.log("strStr", strStr("leetcode", "leeto"));
