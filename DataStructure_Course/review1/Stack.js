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
    let new_node = new Node(value);

    if (this.length === 0) {
      this.top = new_node;
      this.bottom = new_node;
    } else {
      new_node.next = this.top;
      this.top = new_node;
    }

    this.length++;
  }

  pop() {
    this.top = this.top.next;
    this.length--;
  }

  //isEmpty
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
console.log(myStack.peek());
