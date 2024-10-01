const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  //Code Here
  let result = [array[1]];

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < result[0]) {
        result.unshift(array[i]);
      } else if (array[i] > result[result.length - 1]) {
        result.push(array[i]);
      }
      if (array[i] > result[j] && result[j + 1] > array[i]) {
        let left = [...result].slice(0, result[j]);
        let right = [...result].splice(result[j], result.length);

        result = left.concat(array[i]).concat(right);
      }
    }
  }

  return result;
}

console.log(insertionSort(numbers));
