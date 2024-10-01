// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  if (number > 1) {
    return number * findFactorialRecursive(number - 1);
  } else {
    return number;
  }
}

function findFactorialIterative(number) {
  let num = 1;
  //code here
  for (let i = number; i > 1; i--) {
    num *= i;
  }
  return num;
}

console.log("findFactorialRecursive", findFactorialRecursive(5));
console.log("findFactorialIterative", findFactorialIterative(5));
