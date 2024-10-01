class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head; //tail은 끝까지 { value: value, next: null } 처음의 레퍼런스를 가질것임 append쓰면 바뀌고
    this.length = 1;
  }

  prepend(value) {
    const newNode = new Node(value); //새로운놈을 만들고
    newNode.next = this.head; //새로운놈.next에 모든 연결고리를 붙여주겠음
    this.head = newNode; //새로운놈의 레퍼런싱을 this.head로 전달함
    this.length++;
  }

  append(value) {
    const newNode = new Node(value); //새로운놈을 만들고
    this.tail.next = newNode; // 새로운놈을 꼬리.next에 붙여주겠음
    this.tail = newNode; //그리고 꼬리는 그냥 마지막 새로운놈 레퍼런싱을 전달받음
    this.length++;
  }

  insert(index, value) {
    let currentNode = this.head;
    let currentIndex = 0;
    if (index >= this.length) {
      return this.append(value);
    }
    while (currentNode.next) {
      if (currentIndex === index - 1) {
        const newNode = new Node(value);
        let nextNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        break;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
  }

  remove(index) {
    let currentNode = this.head;
    let currentIndex = 0;
    if (index >= this.length) {
      return "not available";
    }
    while (currentNode.next) {
      if (currentIndex === index - 1) {
        let nextNode = currentNode.next;
        let nextNextNode = nextNode.next;
        currentNode.next = nextNextNode;
        this.length--;
        break;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // 0 -> 1 -> 2 -> 3
  // 0 <- 1    2 -> 3
  // 0 <- 1 <- 2    3

  // 0 <- 1 <- 2 <- 3

  reverse() {
    // let old_head = this.head
    // this.head = this.tail
    this.tail = { value: this.head.value, next: null };
    let prev_node = this.tail;
    let current_node = this.head.next;
    let next_node = current_node.next;
    let count = 1;

    while (!(count === this.length - 1)) {
      current_node.next = prev_node;
      if (count <= this.length - 3) {
        prev_node = current_node;
        current_node = next_node;
        next_node = current_node.next;
      }
      count++;
    }
    next_node.next = current_node;
    this.head = next_node;
  }
}

// -1 0 2
const link = new LinkedList(1);
link.prepend(0);
link.append(3);
link.append(4);
link.append(5);
link.insert(2, 2);

console.log("print", link.printList());
link.reverse();
console.log("print", link.printList());
