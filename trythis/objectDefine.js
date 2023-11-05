// practice 01
const arr = [100, 200, 300, 400, 500, 600, 700];

console.log("\nfor in index -----");
for (const idx in arr) console.log(idx);

console.log("\nfor in value -----");
for (const idx in arr) console.log(arr[idx]);

console.log("\nfor of index -----");
for (const idx of Object.keys(arr)) console.log(idx);

console.log("\nfor of value -----");
for (const value of arr) console.log(value);

console.log("=".repeat(30), "\n");

arr.map((v, i) => console.log("map value index >>>", v, i));
console.log("\n");

const obj = {
  name: "lim",
  Faddr: "Yongsan",
  level: 1,
  role: 9,
  receive: false,
};

console.log("\nfor in object key-----");
for (const key in obj) console.log(key);

console.log("\nfor in objcet value-----");
for (const key in obj) console.log(obj[key]);

const iteratorable = (obj) => {
  obj[Symbol.iterator] = function () {
    const values = Object.values(obj);
    let i = -1;
    return {
      next() {
        i += 1;
        if (values.length <= i) return { done: true };
        return { done: false, value: values[i] };
      },
    };
  };
};

iteratorable(obj);
console.log("\nfor of object values, not Object method----");

for (const val of obj) console.log(val);

console.log("\nfor of objcet keys-----");
for (const val of Object.keys(obj)) console.log(val);

console.log("\nfor of objcet values-----");
for (const val of Object.values(obj)) console.log(val);

console.log("\n", "=".repeat(30), "defineProperty\n");
Object.defineProperty(obj, "level", { enumerable: false });
Object.defineProperty(obj, "role", { writable: false });
console.log(Object.getOwnPropertyDescriptors(obj));
obj.role = 5;
console.log(obj);
