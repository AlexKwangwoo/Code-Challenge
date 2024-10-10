/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let current = 0;
  let now = [];
  let final = [];
  let count = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      current++;
      count++;
      console.log("count", count);
      if (current === c) {
        current = 0;
        now.push(mat[i][j]);
        final.push(now);
        now = [];
      } else {
        now.push(mat[i][j]);
      }
    }
  }
  if (now.length > 0) {
    final.push(now);
  }
  console.log("count", count);
  if (count !== r * c) {
    return mat;
  } else {
    return final;
  }
};
