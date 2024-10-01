console.log("ha", reverse("My name is Kwangwoo"));

function reverse(str) {
  let result = "";
  for (i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log("result", reverse("My name is Kwangwoo"));
