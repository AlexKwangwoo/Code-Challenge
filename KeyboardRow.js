/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let a = "qwertyuiop".split("");
  let b = "asdfghjkl".split("");
  let c = "zxcvbnm".split("");
  let d = [];
  for (const each of words) {
    let first = each[0].toLowerCase();
    let temp = a.includes(first)
      ? a
      : b.includes(first)
      ? b
      : c.includes(first)
      ? c
      : null;

    for (let i = 0; i < each.length; i++) {
      console.log(i);
      if (temp.includes(each[i].toLowerCase()) === false) {
        if (!d.includes(each)) {
          d.push(each);
        }
      }
    }
  }
  return words.filter((e) => d.includes(e) === false);
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
