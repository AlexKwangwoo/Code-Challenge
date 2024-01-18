/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let temp = digits.join("");

  temp = BigInt(temp) + BigInt(1);
  temp = temp.toString().split("");

  return temp;
};
