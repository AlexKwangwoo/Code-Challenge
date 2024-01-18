/**
 * @param {string[]} words
 * @return {number}
 */

let morseArray = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

var uniqueMorseRepresentations = function (words) {
  // let
  let set = new Set();
  for (const each of words) {
    let temp = each.split("");
    let word = "";
    for (const inside of temp) {
      word += morseArray[inside];
    }
    set.add(word);
  }

  return set.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

var uniqueMorseRepresentations2 = function (words) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  return new Set(
    words.map((word) =>
      [...word].map((letter) => morse[alphabet.indexOf(letter)]).join("")
    )
  ).size;
};
