/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

var nextGreatestLetter = function (letters, target) {
  let targetNum = target.charCodeAt(0) - 96;

  for (let i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt(0) - 96 > targetNum) {
      return letters[i];
    }
  }

  return letters[0];
};

console.log("next", nextGreatestLetter(["x", "x", "y", "y"], "z"));
