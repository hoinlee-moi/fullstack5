import assert from 'assert'

class Collection {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args;
    if (this.constructor.name === "ArrayList") {
      this.arrayToList();
      //   let rest;
      //   for (let i = this.#arr.length - 1; i >= 0; i--) {
      //     rest = { value: this.#arr[i], rest: rest };
      //   }
      //   this.#arr = rest;
    }
  }

  toArray() {
    return this.#arr;
  }

  get _arr() {
    return this.#arr;
  }

  set _arr(values) {
    return (this.#arr = values);
  }

  clear() {
    this.#arr.length = 0;
  }

  remove() {
    this.#arr.pop();
  }

  get peek() {
    // return this.#arr.at(-1);
    return this.#arr[this.#arr.length - 1];
  }

  get poll() {
    if (this.#isQueue()) {
      return this.dequeue();
      // } else if (this.pop) {
      //   return this.pop();
    } else {
      return this.#arr.pop();
    }
  }

  get isEmpty() {
    return !this.length;
  }
  get length() {
    return this.#arr?.length ?? 0;
  }
  get size() {
    if (this.isArray) return this.#arr.length;
    let node = this.#arr;
    if (node.value === undefined) return 0;
    let size = 0;
    while (true) {
      if (!node) return size;
      node = node.rest;
      size += 1;
    }
  }

  print(flag) {
    console.log(
      `${flag ?? this.constructor.name}=${JSON.stringify(this.#arr)}`
    );
  }

  indexOf(value) {
    if (Array.isArray(this.#arr)) return this.#arr.indexOf(value);
    let idx = 0;
    let node = this.#arr;
    while (true) {
      if (node.value === value) return idx;
      node = node.rest;
      idx += 1;
    }
  }
  contains(value) {
    if (Array.isArray(this.#arr)) return this.#arr.includes(value);
    let node = this.#arr;
    while (true) {
      if (!node) return false;
      if (node.value === value) return true;
      node = node.rest;
    }
  }

  #isQueue() {
    return this.constructor.name === "Queue";
  }

  [Symbol.iterator]() {
    return this.#arr.values();
  }
}

class Stack extends Collection {
  constructor(...args) {
    super(...args);
  }

  push(value) {
    this._arr.push(value);
  }

  pop() {
    return this._arr.pop();
  }
}

class Queue extends Collection {
  constructor(...args) {
    super(...args);
  }

  enqueue(value) {
    this._arr.push(value);
  }

  dequeue() {
    return this._arr.shift();
  }
}

class ArrayList extends Collection {
  constructor(...args) {
    super(...args);
  }

  listToArray() {
    if (this.isArray) return;
    if (this.size === 0) return (this._arr = []);
    const arr = [];
    let node = this._arr;
    while (true) {
      arr.push(node.value);
      node = node.rest;
      if (!node) return (this._arr = arr);
    }
  }
  arrayToList() {
    if (!this.isArray) return;
    let rest;
    for (let i = this._arr.length - 1; i >= 0; i--) {
      rest = { value: this._arr[i], rest: rest };
      if (rest.rest === undefined) delete rest.rest;
    }
    return (this._arr = rest);
  }
  add(value,idx) {
    if (this.isArray) return this._arr.push(value);
    let node = this._arr;
    while (true) {
      if (this.size === 0) return (this._arr = { value: value });
      if (!node.rest) return (node.rest = { value: value ,rest:node.rest});
      node = node.rest;
    }
  }
  remove(value) {
    if (this.isArray) {
      this._arr.filter((v) => v !== value);
      return;
    }
    let node = this._arr;
    while (true) {
      if (node.value === value) return (this._arr = this._arr.rest ?? {});
      if (node.rest.value === value) {
        if (node.rest.rest !== undefined) node.rest = node.rest.rest;
        return delete node.rest;
      }
      node = node.rest;
      if (!node) return;
    }
  }

  set(setIdx, value) {
    if (this.isArray) {
      this._arr.map((v, i) => (i === setIdx ? value : v));
      return;
    }
    let idx = 0;
    let node = this._arr;
    while (true) {
      if (!node) return;
      if (idx === setIdx) {
        node.value = value;
        if (node.rest !== undefined) node.rest = node.rest;
        return;
      }
      node = node.rest;
      idx += 1;
    }
  }
  get(getIdx) {
    if (this.isArray) return this._arr[getIdx];
    let idx = 0;
    let node = this._arr;
    while (true) {
      if (!node) return;
      if (idx === getIdx) {
        return node.value;
      }
      node = node.rest;
      idx += 1;
    }
  }
  get isArray() {
    return Array.isArray(this._arr);
  }
}

const alist = new ArrayList([1, 2]); // alist.toString() ⇒ { value: 1, rest: { value: 2 } }
alist.add(3); // { value: 1, rest: { value: 2, rest: { value: 3 } } }
alist.remove(2); // { value: 1, rest: { value: 3 } }
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
alist.add(33, 1);
alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
alist.get(2);
alist.size; // 22, 4
alist.indexOf(300); // 1
alist.contains(300);
alist.contains(301); // true, false
alist.isEmpty;
alist.peek; // false, 3
alist.toArray(); // [1, 300, 22, 3]
// alist.iterator().next();  // { value: 1, done: false }
alist.clear(); // all clear
const stack = new Stack(); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
assert.deepStrictEqual(stack.toArray(), [3]);
stack.push(5); // 추가하기
stack.push(7); // 추가하기
stack.print();
stack.clear();
console.log("poll_stack=", stack.poll, stack.isEmpty, stack.length);

const coll = new Collection([3, 5, 7]);
console.log("poll_coll=", coll.poll);

const queue = new Queue();
queue.enqueue(3); // 추가하기
queue.print();
assert.deepStrictEqual(queue.toArray(), [3]);
queue.enqueue(5);
queue.enqueue(7);
queue.print();
console.log("poll_queue=", queue.poll);

const queue2 = new Queue([1, 2]);
queue2.enqueue(3); // 추가하기
queue2.print();
assert.deepStrictEqual(queue2.toArray(), [1, 2, 3]);
assert.deepStrictEqual(queue2.dequeue(), 1);
assert.deepStrictEqual(queue2.toArray(), [2, 3]);

const queue3 = new Queue(1, 2);
queue3.enqueue(3); // 추가하기
assert.deepStrictEqual(queue3.toArray(), [1, 2, 3]);
assert.deepStrictEqual(queue3.dequeue(), 1);
assert.deepStrictEqual(queue3.toArray(), [2, 3]);
queue3.print();

queue3.clear();
assert.deepStrictEqual(queue3.toArray(), []);

console.log("queue==", [...queue]);
