/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
  let metrix_array = [];
  let number = 0;
  let f = 0;
  let s = 0;

  for (i = 0; i < n; i++) {
    let temp = [];
    for (j = 0; j < n; j++) {
      if (i !== 0 || j !== 0) {
        number += 1;
      }
      temp.push(number);
    }

    metrix_array.push(temp);
  }

  commands.forEach((each) => {
    if (each === "UP") {
      f -= 1;
    }
    if (each === "DOWN") {
      f += 1;
    }
    if (each === "LEFT") {
      s -= 1;
    }
    if (each === "RIGHT") {
      s += 1;
    }
  });

  return metrix_array[f][s];
};

var best_finalPositionOfSnake = function (n, commands) {
  let row = 0;
  let col = 0;

  for (const command of commands) {
    if (command === "UP") {
      row -= 1;
    } else if (command === "DOWN") {
      row += 1;
    } else if (command === "LEFT") {
      col -= 1;
    } else if (command === "RIGHT") {
      col += 1;
    }
  }
  const finalIndex = row * n + col;
  return finalIndex;
};

console.log("metrix", finalPositionOfSnake(3, ["DOWN", "RIGHT", "UP"]));
