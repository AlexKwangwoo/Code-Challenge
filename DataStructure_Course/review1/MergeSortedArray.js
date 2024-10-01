function mergeSortedArrays(a, b) {
  let result = [];
  let l = 0;
  let r = 0;

  while (!(l > a.length - 1 && r > b.length - 1)) {
    if (a[l] >= b[r]) {
      result.push(b[r]);
      if (b.length > r) {
        r++;
      }
    } else {
      result.push(a[l]);
      if (a.length > l) {
        l++;
      }
    }
  }

  return result;
}

console.log("result", mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
