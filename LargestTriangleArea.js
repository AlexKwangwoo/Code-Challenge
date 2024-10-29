/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let maxX = 0;
  let maxY = 0;
  points.forEach((each) => {
    console.log("each", each);
    if (each[1] > maxY) {
      maxY = each[1];
    }

    if (each[0] > maxX) {
      maxX = each[0];
    }
  });

  return (maxX * maxY) / 2;
};

console.log(
  "test",
  largestTriangleArea([
    [4, 6],
    [6, 5],
    [3, 1],
  ])
);
