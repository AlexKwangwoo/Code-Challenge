/**
 * @param {string} s
 * @return {number}
 */

// const checkValue = (text, i) => {
//   if (i + 1 < text.length) {
//     if (text[i] + text[i + 1] === "IV") {
//       return { value: 4, plus: 1 };
//     } else if (text[i] + text[i + 1] === "IX") {
//       return { value: 9, plus: 1 };
//     } else if (text[i] + text[i + 1] === "XL") {
//       return { value: 40, plus: 1 };
//     } else if (text[i] + text[i + 1] === "XC") {
//       return { value: 90, plus: 1 };
//     } else if (text[i] + text[i + 1] === "CD") {
//       return { value: 400, plus: 1 };
//     } else if (text[i] + text[i + 1] === "CM") {
//       return { value: 900, plus: 1 };
//     }
//   }
//   if (text[i] === "I") {
//     return { value: 1, plus: 0 };
//   } else if (text[i] === "V") {
//     return { value: 5, plus: 0 };
//   } else if (text[i] === "X") {
//     return { value: 10, plus: 0 };
//   } else if (text[i] === "L") {
//     return { value: 50, plus: 0 };
//   } else if (text[i] === "C") {
//     return { value: 100, plus: 0 };
//   } else if (text[i] === "D") {
//     return { value: 500, plus: 0 };
//   } else if (text[i] === "M") {
//     var v = { value: 1000, plus: 0 };
//     return v;
//   }
// };

// var romanToInt = function (s) {
//   let total = 0;
//   for (let i = 0; i < s.length; i++) {
//     var result = checkValue(s, i);
//     total += result.value;
//     i += result.plus;
//   }
//   return total;
// };

var romanToInt = function (s) {
  let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    var current = roman[s[i]];
    var next = roman[s[i + 1]];
    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  return total;
};

console.log("total", romanToInt("III"));
console.log("total", romanToInt("LVIII"));
console.log("total", romanToInt("MCMXCIV"));
