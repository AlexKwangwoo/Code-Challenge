class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.last.value;
  }

  enqueue(value) {
    let new_node = new Node(value);

    if (this.length === 0) {
      this.first = new_node;
      this.last = new_node;
    } else {
      this.last.next = new_node;
      this.last = new_node;
    }

    this.length++;
  }

  dequeue() {
    this.first = this.first.next;
    this.length--;
  }

  //isEmpty
}

const myStack = new Queue();
myStack.enqueue(1);
myStack.enqueue(2);
myStack.enqueue(3);
myStack.enqueue(4);
myStack.enqueue(5);

console.log(myStack.peek());
myStack.dequeue();
myStack.dequeue();
console.log(myStack);
