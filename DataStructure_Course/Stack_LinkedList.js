class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top.value;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }
  pop() {
    this.top = this.top.next;
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
