const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// 두개씩 비교하여 큰걸 오른쪽으로 이동.. i가 늘때마다 마지막꺼는 비교할필요없어짐
function bubbleSort(array) {
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
  }

  return array;
}
bubbleSort(numbers);
console.log(numbers);
