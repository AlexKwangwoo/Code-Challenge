/**
 * @param {string} s
 * @return {boolean}
 */

function contrast(a) {
  if (a === "(") {
    return ")";
  } else if (a === "[") {
    return "]";
  } else if (a === "{") {
    return "}";
  }
}

function checkOpen(a) {
  if (a === "(" || a === "[" || a === "{") {
    return true;
  } else false;
}
var isValid = function (s) {
  var stack = [];
  for (let i = 0; i < s.length; i++) {
    if (checkOpen(s[i])) {
      stack.push(s[i]);
    } else {
      var lastOne = stack.pop();
      // console.log("vs", contrast(lastOne), s[i]);
      if (contrast(lastOne) !== s[i]) {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
// // "{[]}"

// console.log("isValid", isValid("()[]{}"));
console.log("isValid", isValid("{[]}"));
// var v = ["a", "b"];

// var c = v.pop();
// console.log("c", c);
// console.log("v", v);
