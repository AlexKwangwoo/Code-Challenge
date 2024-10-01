class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //_ 붙이면 private function임 내부에서만 사용가능!
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
  }

  get(key) {
    let hash = this._hash(key);
    let found = this.data[hash];
    let result;
    for (let i = 0; i < found.length; i++) {
      if (found[i][0] === key) {
        result = found[i][1];
        console.log("result", result);
        return result;
      }
    }
  }

  keys() {
    let temp = [];
    this.data.forEach((inside) => {
      inside.forEach((second) => {
        temp.push(second[0]);
      });
    });
    return temp;
  }
}

console.log("triggered");
const myHashTable = new HashTable(50);

myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");

console.log("myHashTable", myHashTable);
console.log("key", myHashTable.keys());

let test = { a: 1, b: 2 };
console.log("length?", test.length);
