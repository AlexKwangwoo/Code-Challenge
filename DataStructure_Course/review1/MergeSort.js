const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    let left = array.slice(0, Math.floor(array.length / 2));
    let right = array.slice(Math.floor(array.length / 2));
    return merge(mergeSort(left), mergeSort(right));
  }
  // Split Array in into right and left
}

function merge(left, right) {
  // console.log(left, right);

  // console.log("---------------------------");
  let i = 0;
  let j = 0;
  let temp = [];

  while (i < left.length && j < right.length) {
    // console.log("left[i]", left[i]);
    // console.log("right[j]", right[j]);
    if (left[i] > right[j]) {
      temp.push(right[j]);
      j++;
    } else {
      temp.push(left[i]);
      i++;
    }
  }
  // console.log("temp", temp);
  return temp.concat(left.slice(i)).concat(right.slice(j));
}

const answer = mergeSort(numbers);
console.log(answer);
