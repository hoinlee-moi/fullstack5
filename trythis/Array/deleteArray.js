const arr = [1, 2, 3, 4];
const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

const deleteArray = ([...arr], start, end) =>
  end === undefined
    ? arr.slice(0, start)
    : (arr.splice(start, end - start), arr);

const deleteObjectArray = (arr, ...args) =>
  args.length > 1
    ? arr.filter((item) => item[args[0]] !== args[1])
    : arr.filter((item, idx) => idx !== args[0]);

console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 1, 3)); // [1, 4]
console.log(arr);

console.log(deleteObjectArray(users, 2)); // Hong, Kim
console.log(deleteObjectArray(users, "id", 2)); // Hong, Lee
console.log(deleteObjectArray(users, "name", "Lee")); // Hong, Kim
