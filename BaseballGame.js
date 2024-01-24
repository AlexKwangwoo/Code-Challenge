/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let result = [];
  for (let i = 0; i < operations.length; i++) {
    let number = +operations[i];
    if (i === 0) {
      result.push(+number);
    } else {
      if (operations[i] === "+") {
        number = result[result.length - 1] + (+result[result.length - 2] ?? 0);
        result.push(number);
      } else if (operations[i] === "D") {
        number = result[result.length - 1] * 2;
        result.push(number);
      } else if (operations[i] === "C") {
        result.pop();
      } else {
        result.push(number);
      }
    }
  }

  return result.reduce((a, b) => a + b, 0);
};

console.log("result", calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
