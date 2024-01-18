const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowestNumber;
    let rememberIndex;
    for (let j = i; j < array.length; j++) {
      if (j === i) {
        lowestNumber = array[j];
      } else {
        if (lowestNumber > array[j]) {
          lowestNumber = array[j];
          rememberIndex = j;
        }
      }
    }
    if (rememberIndex) {
      var temp = array[i];
      array[i] = array[rememberIndex];
      array[rememberIndex] = temp;
    }
  }
}

selectionSort(numbers);
console.log("numbers!!", numbers);
