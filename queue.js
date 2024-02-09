class Queue {
  constructor() {
    this.queue = [];
  }

  add(n) {
    this.queue.unshift(n);
  }

  remove() {
    return this.queue.pop();
  }

  peek() {
    return this.queue[this.queue.length - 1];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

function weave(sourceOne, sourceTwo) {
  let q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);

const queueTwo = new Queue();
queueTwo.add("Hi");
queueTwo.add("There");

const q = weave(queueOne, queueTwo);

console.log(q.remove()); // Output: 1
console.log(q.remove()); // Output: 'Hi'
console.log(q.remove()); // Output: 2
console.log(q.remove()); // Output: 'There'
