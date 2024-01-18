class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
  }
  pop() {
    let temp = [];
    for (const each of this.array) {
      temp.push(each);
    }
    this.array = temp;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("1");
myStack.push("2");
myStack.push("3");
myStack.push("4");
myStack.pop();
console.log(myStack);
console.log(myStack.peek());
//Discord
//Udemy
//google
