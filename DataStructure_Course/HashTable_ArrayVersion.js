class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let indexData = this.data[this._hash(key)];
    if (indexData) {
      while (indexData !== null) {
        if (indexData.next === null) {
          indexData.next = { key, value, next: null };
          return;
        }
        indexData = indexData.next;
      }
    } else {
      this.data[this._hash(key)] = { key, value, next: null };
    }
  }

  get(key) {
    let indexData = this.data[this._hash(key)];
    if (indexData && indexData.next === null) {
      return console.log(indexData.value);
    } else if (indexData) {
      while (indexData !== null) {
        if (indexData.key === key) {
          return console.log(indexData.value);
        }
        indexData = indexData.next;
      }
      return "not found";
    }
  }

  keys() {
    let tempArray = [];
    for (let i = 0; i < this.data.length; i++) {
      let indexData = this.data[i];

      if (indexData) {
        if (indexData.next === null) {
          tempArray.push(indexData.key);
        } else {
          while (indexData) {
            tempArray.push(indexData.key);
            indexData = indexData.next;
          }
        }
      }
    }
    console.log("tempArray", tempArray);
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("grapes", 10000);
myHashTable.set("a", 1);
myHashTable.set("b", 2);
myHashTable.set("c", 3);
myHashTable.set("d", 4);

myHashTable.set("apples", 9);

myHashTable.get("grapes");
myHashTable.get("apples");
//
myHashTable.get("a");
myHashTable.get("b");
myHashTable.get("c");

console.log("myHashTable", myHashTable);

myHashTable.keys();
