class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListNode {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  delete() {}
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + "=>";
      current = current.next;
    }
    result += "null";
    console.log("result", result);
  }
}

const list = new LinkedListNode();
list.append("1");
list.append("2");
list.prepend("3");
list.print();
