const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowestNumIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[lowestNumIndex] > array[j]) {
        lowestNumIndex = j;
      }
    }

    let temp = array[i];
    array[i] = array[lowestNumIndex];
    array[lowestNumIndex] = temp;
  }
  //Code Here
  return array;
}

console.log("selection");
console.log(selectionSort(numbers));
