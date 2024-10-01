class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let new_node = new Node(value);
    if (this.root === null) {
      this.root = new_node;
    } else {
      let current = this.root;
      while (current) {
        if (current.value > value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = new_node;
            break;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = new_node;
            break;
          }
        }
      }
    }
  }
  lookup(value) {
    if (this.root === null) {
      return null;
    } else {
      let previous = null;
      let current = this.root;
      while (current) {
        if (current.value === value) {
          return { previous, current };
        }
        if (current.value > value) {
          if (current.left) {
            previous = current;
            current = current.left;
          } else {
            previous = null;
            current = null;
          }
        } else {
          if (current.right) {
            previous = current;
            current = current.right;
          } else {
            previous = null;
            current = null;
          }
        }
      }
    }
    return { previous, current };
  }

  remove(value) {
    let { previous, current } = this.lookup(value);
    console.log("previous", previous);
    console.log("current", current);
    if (current.right) {
      if (current.right.left) {
      } else {
      }
    } else if (current.left) {
    } else {
    }
  }
}

const tree = new BinarySearchTree();

console.log("tree", tree);

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(160);
tree.insert(172);
tree.insert(15);
tree.insert(1);
tree.remove(20);
console.log(traverse(tree.root));
console.log(tree.lookup(20));

//        9
//     4     20*
//   1  6  15  170
// x   x  x   160  172

console.log("tree2", tree);

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
