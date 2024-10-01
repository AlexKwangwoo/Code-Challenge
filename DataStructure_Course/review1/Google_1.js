function findDoubleNumber(array) {
  let temp = {};
  let result;

  array.forEach((each) => {
    if (temp[each]) {
      result = each;
      return result;
    } else {
      temp[each] = true;
    }
  });
  console.log("??", temp);
  return result;
}

console.log("findDoubleNumber", findDoubleNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]));
