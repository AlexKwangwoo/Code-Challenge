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
    this.array.pop();
  }

  //isEmpty
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.pop();
myStack.push(3);
console.log(myStack);
console.log(myStack.peek());
