/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];
  let current = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0 || i === 1) {
      current.push(1);
    } else {
      let temp = current;
      current = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          current.push(1);
        } else {
          current.push(temp[j - 1] + temp[j]);
        }
      }
    }
    result.push([...current]);
  }
  return result;
};

console.log("result", generate(5));
