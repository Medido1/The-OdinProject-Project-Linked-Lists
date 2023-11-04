class Node {
  constructor(data){
    this.data = data;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor(){
    this.head = null;
  }

  append(value){
    if (this.head == null) {
      this.head = new Node(value);
      return;
    }

    let temp = this.head;
    while(temp.nextNode){
      temp = temp.nextNode;
    }
    temp.nextNode = new Node(value);
  }

  prepend(value){
    if (this.head == null){
      this.head = new Node(value);
      return;
    }
    let temp = this.head;
    this.head = new Node(value);
    this.head.nextNode = temp;
  }

  size(){
    if (this.head == null) return 0;
    let count = 0;
    let temp = this.head;
    while(temp){
      count += 1;
      temp = temp.nextNode;
    }
    return count;
  }

  getHead(){
    return this.head;
  }

  getTail(){
    if (this.head == null) return null;
    let temp = this.head;
    while(temp.nextNode){
      temp = temp.nextNode;
    }
    return temp;
  }

  at(index){
    if (this.head == null) return null;
    let count = 0;
    let temp = this.head;
    while(temp){
      if (index == count) return temp;
      temp = temp.nextNode;
      count += 1;
    }
    return null;
  }

  pop(){
    if (this.head == null) return;
    if (this.size() == 1){
      this.head = null;
      return;
    }
    let beforeLast = this.at(this.size() - 2);
    beforeLast.nextNode = null;
  }

  contains(value){
    if (this.head == null) return null;
    let temp = this.head;
    while(temp){
      if (temp.data == value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  find(value){
    if (!this.contains(value)) return null;
    let index = 0;
    let temp = this.head;
    while(temp){
      if (temp.data == value) return index;
      index += 1;
      temp = temp.nextNode;
    }
  }

  toString(){
    let str = "";
    let temp = this.head;
    while(temp){
      str += ` (${temp.data}) =>`;
      temp = temp.nextNode;
    }
    return str + ` null`;
  }

  insertAt(value, index){
    if (this.head == null) {
      this.append(value);
    }
    else if  (index == 0){
      this.prepend(value);
    }
    else {
      let before = this.at(index - 1);
      let after = this.at(index)
      let newNode = new Node(value);
      before.nextNode = newNode;
      newNode.nextNode = after;
    }
  }

  removeAt(index){
    if (this.head == null) return;
    else if (index == 0){
      this.head = this.at(1);
    }
    else {
      let before = this.at(index - 1);
      let after = this.at(index + 1);
      before.nextNode = after;
    }

  }
}

