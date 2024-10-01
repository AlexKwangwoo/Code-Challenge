/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
  if (words[startIndex] === target) {
    return 0;
  }
  let right_way = [...words.slice(startIndex)];
  right_way.push(...words.slice(0, startIndex));
  let reverse_way = [...words.slice(0, startIndex)];
  let temp_reverse = [...words.slice(startIndex)];
  let temp = [temp_reverse[0]];
  temp_reverse.shift();
  temp_reverse.reverse();
  reverse_way.reverse();
  reverse_way.push(...temp_reverse);
  temp.push(...reverse_way);

  let result = [];
  right_way.forEach((each, index) => {
    if (each === target) {
      result.push(index);
    }
  });

  temp.forEach((each, index) => {
    if (each === target) {
      result.push(index);
    }
  });

  if (result.length === 0) {
    return -1;
  }

  return Math.min(...result);
};

console.log(
  closetTarget(
    [
      "vieruszfqo",
      "ivgfhbopfy",
      "vfsymkzuio",
      "ryqtkehkov",
      "vfsymkzuio",
      "vieruszfqo",
      "xnsacsqaad",
      "xnsacsqaad",
      "ryqtkehkov",
      "oxnuqvvyqx",
    ],
    "ryqtkehkov",
    4
  )
);

let array = [1, 2, 3, 4, 5];
console.log("???", array.at(-1));
