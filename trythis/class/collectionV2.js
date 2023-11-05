const assert = require("assert");

class Collection {
  #arr;
  constructor(argu) {
    this.#arr = Array.isArray(argu[0]) ? argu[0] : argu;
  }

  get _arr() {
    return this.#arr;
  }
  set _arr(values) {
    return (this.#arr = values);
  }
  get length() {
    return this.#arr.length;
  }

  insert(value) {
    return this.#arr.push(value);
  }
  toArray() {
    return this.#arr;
  }
  clear() {
    return (this.#arr = []);
  }
  print(flag) {
    console.log(`${flag ?? this.construtor.name} = ${JSON.stringify(this.#arr)}`);
  }
  isEmtpy() {
    return this.#arr.length === 0;
  }
  get peek () {
    if(this.construtor.name === 'Stack') return this.#arr[this.arr.length-1]
    return this.#arr[0]
  }
  [Symbol.iterator]() {
    const selfArr = this.#arr;
    let idx = -1;

    return {
      next() {
        idx += 1;
        return { value: selfArr[idx], done: idx >= selfArr.length };
      },
    };
  }
}

class Stack extends Collection {
  constructor(...argu) {
    super(argu);
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
  poll() {
    return this._arr.pop();
  }
  remove() {
    this._arr.pop();
  }
}

class Queue extends Collection {
  constructor(...argu) {
    super(argu);
  }

  peek() {
    return this._arr[0];
  }
  poll() {
    return this._arr.shift();
  }
  remove() {
    this._arr.shift();
  }
}

const stack = new Stack([1, 2]);
const queue = new Queue([1, 2, 3]);

assert.deepStrictEqual(stack.toArray(), [1, 2]);
assert.deepStrictEqual(queue.toArray(), [1, 2, 3]);

stack.insert(5);
queue.insert(5);

assert.deepStrictEqual(stack.toArray(), [1, 2, 5]);
assert.deepStrictEqual(queue.toArray(), [1, 2, 3, 5]);

assert.deepStrictEqual(stack.peek(), 5);
assert.deepStrictEqual(queue.peek(), 1);

assert.deepStrictEqual(stack.poll(), 5);
assert.deepStrictEqual(queue.poll(), 1);

assert.deepStrictEqual(stack.toArray(), [1, 2]);
assert.deepStrictEqual(queue.toArray(), [2, 3, 5]);

stack.print();
queue.print();

assert.deepStrictEqual(stack.length, 2);
assert.deepStrictEqual(queue.length, 3);

for(const value of stack) console.log(value)
for(const value of queue) console.log(value)

assert.deepStrictEqual(stack.isEmtpy(), false);
assert.deepStrictEqual(queue.isEmtpy(), false);

stack.clear();
queue.clear();

assert.deepStrictEqual(stack.isEmtpy(), true);
assert.deepStrictEqual(queue.isEmtpy(), true);
