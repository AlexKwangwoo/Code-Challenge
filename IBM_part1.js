function powerArray(arr) {
  let resultObject = {};
  let maximum = 0;
  let modulo = 1000000007;

  for (let i = 0; i < arr.length - 1; i++) {
    const currentValue = Math.pow(arr[i], arr[i + 1]) % modulo;

    console.log("arr", arr[i]);
    //memorize the maximum number
    if (i === 0) {
      maximum = currentValue;
    } else if (maximum < currentValue) {
      maximum = currentValue;
    }

    if (resultObject[currentValue]) {
      resultObject[currentValue].push(i);
    } else {
      resultObject[currentValue] = [];
      resultObject[currentValue].push(i);
    }
  }

  //need to plus 1 (started from 1)
  return Math.min(...resultObject[maximum]) + 1;
}

console.log("result", powerArray([9, 9, 5, 6, 10, 9, 10, 9, 9, 7]));
console.log("result2", powerArray([2, 2, 3]));

// console.log(Math.pow(2, 10));
