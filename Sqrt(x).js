/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let current = 2;
  let round = 1;
  if (x < 2) {
    return x;
  }

  while (current <= x) {
    round += 1;
    current = round * round;
  }

  return round - 1;
};

console.log(mySqrt(1));
