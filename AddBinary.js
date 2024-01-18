/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  a = a + "";
  b = b + "";
  let maxLength = a.length < b.length ? b.length : a.length;
  let result = [];

  let plus = 0;
  for (let i = 0; i < maxLength; i++) {
    let tempA = i + 1 <= a.length ? a[a.length - i - 1] : 0;
    let tempB = i + 1 <= b.length ? b[b.length - i - 1] : 0;
    let resultNumber = parseInt(tempA) + parseInt(tempB) + plus;
    plus = 0;
    if (resultNumber > 1) {
      plus += 1;
      resultNumber -= 2;
    }
    result.push(resultNumber);
  }

  if (plus > 0) {
    result.push(plus);
  }
  return result.reverse().join("");
};

console.log(addBinary(11, 1));
console.log(addBinary(1010, 1011));
console.log(addBinary(0, 1));
