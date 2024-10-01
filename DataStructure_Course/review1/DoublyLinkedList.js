class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head; //tail은 끝까지 { value: value, next: null } 처음의 레퍼런스를 가질것임 append쓰면 바뀌고
    this.length = 1;
  }

  prepend(value) {
    const newNode = new Node(value); //새로운놈을 만들고
    newNode.next = this.head; //새로운놈.next에 모든 연결고리를 붙여주겠음
    this.head.prev = newNode;
    this.head = newNode; //새로운놈의 레퍼런싱을 this.head로 전달함
    this.length++;
  }

  append(value) {
    const newNode = new Node(value); //새로운놈을 만들고
    this.tail.next = newNode; // 새로운놈을 꼬리.next에 붙여주겠음
    newNode.prev = this.tail;
    this.tail = newNode; //그리고 꼬리는 그냥 마지막 새로운놈 레퍼런싱을 전달받음
    this.length++;
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

  // current   new    next
  // 0         1      2
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
        newNode.next = nextNode;
        nextNode.prev = newNode;
        currentNode.next = newNode;
        newNode.prev = currentNode;

        this.length++;
        break;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
  }

  // current   next    nextNext
  // 0         1      2
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
        nextNextNode.prev = currentNode;
        currentNode.next = nextNextNode;
        this.length--;
        break;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
  }
}

// -1 0 2
const link = new DoublyLinkedList(0);
link.prepend(-1);
link.append(2);
link.insert(2, 1);

link.remove(2);
console.log(link.printList());
console.log("link", link);
