// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //Code here

    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this.printList();
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

  insert(index, value) {
    //Code here
    let node = new Node(value);
    let nowNode = this.head;
    let currentIndex = 1;
    while (currentIndex < index) {
      currentIndex++;
      nowNode = nowNode.next;
    }
    let afterNode = nowNode.next;
    nowNode.next = node;
    node.next = afterNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    //Code here

    let nowNode = this.head;
    let currentIndex = 1;
    let lastNode;
    while (currentIndex < index) {
      currentIndex++;
      nowNode = nowNode.next;
    }
    // console.log("lastNode", lastNode);
    console.log("nowNode", nowNode);

    // important part!! nowNode를 이용해 다음.. 다음 노드까지 갈수있다
    let afterNode = nowNode.next;
    nowNode.next = afterNode.next;
    this.length--;
    return this.printList();
  }

  // 1 -> 2 -> 3 이면 2에서 1을 연결 시켜준다.. 2의 next는 3이므로 (근데 2의 next가 1로 바껴서 let을
  //   두개만 쓰먼 3으로 갈수가없다 그래서 3개를써서 3번째껄 기억해둔다음에
  //   다음 current를 2로 옮기고 3이 nextNode가 되어 2 ,3,4)를 해결하면된다
  reverse() {
    let currentNode = this.head;
    let lastNode = this.tail;
    let nextNode = currentNode.next;
    let m = 0;
    while (nextNode.next) {
      if (m === 0) {
        currentNode.next = null;
        this.tail = currentNode;
      }
      let doubleNextNode = nextNode.next;
      nextNode.next = currentNode;
      currentNode = nextNode;
      nextNode = doubleNextNode;
      m++;
    }
    lastNode.next = currentNode;
    this.head = lastNode;

    return this.printList();
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.append(2);
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(4));
console.log(myLinkedList.append(5));
// console.log(myLinkedList.prepend(0));
// console.log(myLinkedList.insert(2, 2));
// console.log(myLinkedList.remove(2));
// console.log(myLinkedList.insert(2, 2));
console.log(myLinkedList.reverse());

console.log("myLinkedList222", myLinkedList);

// let myLinkedList = new LinkedList(10);
// console.log(myLinkedList.append(5));
// console.log(myLinkedList.append(16));
// console.log(myLinkedList.append(88));
// console.log(myLinkedList.prepend(1));
// console.log(myLinkedList.insert(2, 99));
// console.log(myLinkedList.remove(2));

// console.log("myLinkedList222", myLinkedList);

// let ho = { a: "1", b: "2" };
// let a = ho.a;
// let b = a;

// a = 2;

// ho = { a: "52", b: "52" };

// console.log("a", a); // 2
// console.log("b", b); // { a: "1", b: "2" }; 즉 처음 b의 참조값을 가리키고있음 ho가 바뀌어도
