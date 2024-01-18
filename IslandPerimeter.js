/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  var total = 0;
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        if (i === 0 || grid[i - 1][j] === 0 || grid[i - 1][j] === undefined) {
          total += 1;
        }
        if (
          i === grid.length - 1 ||
          grid[i + 1][j] === 0 ||
          grid[i + 1][j] === undefined
        ) {
          total += 1;
        }
        if (grid[i][j - 1] === 0 || grid[i][j - 1] === undefined) {
          total += 1;
        }
        if (grid[i][j + 1] === 0 || grid[i][j + 1] === undefined) {
          total += 1;
        }
      }
    }
  }
  return total;
};

console.log("islandPerimeter", islandPerimeter([[1, 0]]));
