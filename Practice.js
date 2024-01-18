let a = ["a", "b", "c", "d"];

let b = ["d", "z", "f"];
let s = "dzf";

// console.log(a.some((each) => b.includes(each)));
let z = { a: "1", b: "2" };
delete b[0];
delete z["a"];
console.log(b);
console.log(z);
