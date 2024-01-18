/**
 * @param {number} n
 * @return {number}
 */

// n , 1 => 1
// n , 2 => 2
// n , 3 => 3
// n , 4 => 5

var climbStairs = function (n) {
  let v = [1, 2];
  if (n < 3) {
    return n;
  }
  for (i = 0; i < n - 2; i++) {
    v.push(v[i] + v[i + 1]);
  }
  return v.at(-1);
};

console.log(climbStairs(4));
