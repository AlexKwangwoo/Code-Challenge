/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (y) {
//   let x = y + "";
//   let length = (x + "").length;

//   if (length !== 1 && x > 0) {
//     let half_point = length / 2;
//     for (let i = 0; i < half_point; i++) {
//       if (x[i] !== x[length - i - 1]) {
//         return false;
//       }
//     }
//     return true;
//   } else if (length === 1) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrome("-121"));
// console.log(isPalindrome(10));
var isPalindrome = function (x) {
  console.log("x.toString().split", x.toString().split(""));
  console.log("x.toString().split", x.toString().split("").reverse());
  return Number(x.toString().split("").reverse().join("")) === x;
};
console.log(isPalindrome("12345678"));
