class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.unshift(record);
  }

  pop() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }
}

class Queue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  add(record) {
    this.stackOne.push(record);
  }

  remove() {
    let temp;
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop());
    }
    temp = this.stackTwo.pop();
    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    }
    return temp;
  }

  peek() {
    let temp;
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop());
    }
    temp = this.stackTwo.peek();
    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    }
    return temp;
  }
}
