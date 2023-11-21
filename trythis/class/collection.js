


import assert from 'assert'
import { Collection,Stack,Queue,ArrayList } from '../utils/collection.js';

const stack = new Stack([1, 2]);
const queue = new Queue([1, 2, 3]);

assert.deepStrictEqual(stack.toArray(), [1, 2]);
assert.deepStrictEqual(queue.toArray(), [1, 2, 3]);

stack.push(5);
queue.enqueue(5);

assert.deepStrictEqual(stack.toArray(), [1, 2, 5]);
assert.deepStrictEqual(queue.toArray(), [1, 2, 3, 5]);

assert.deepStrictEqual(stack.peek, 5);
assert.deepStrictEqual(queue.peek, 5);


assert.deepStrictEqual(stack.poll, 5);
assert.deepStrictEqual(queue.poll, 1);

assert.deepStrictEqual(stack.toArray(), [1, 2]);
assert.deepStrictEqual(queue.toArray(), [2, 3, 5]);

stack.print();
queue.print();

assert.deepStrictEqual(stack.length, 2);
assert.deepStrictEqual(queue.length, 3);

for(const value of stack) console.log(value)
for(const value of queue) console.log(value)

assert.deepStrictEqual(stack.isEmpty, false);
assert.deepStrictEqual(queue.isEmpty, false);

stack.clear();
queue.clear();

assert.deepStrictEqual(stack.isEmpty, true);
assert.deepStrictEqual(queue.isEmpty, true);
