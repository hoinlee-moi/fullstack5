// const obj = { id: 1 };
// const arr = [];

// function f(n) {
//     console.log(this.id)
//     arr.push(f)
//     if(n===1) return 1
//     return n-f(n-1)
// }
// f.bind(obj)(3)

// console.log(arr[0]===arr[1])
// console.log(arr[0]===arr[2])
// console.log(arr[1]===arr[2])

// function f(n) {
//   if (n === 1) return 1;
//   return n + f(n - 1);
// }

// const bindF = f.bind(obj)
// console.log(f)
// console.log(f.bind(obj))
// console.log(f === f.bind(obj)
// const obj = {
//   name: "hong",
//   m() {
//     console.log(this.name);
//   },
//   m2: () => {
//     console.log(this.name);
//   },
// };

function f() {
  const ff = () => {
    console.log("ff>>>", this);
  };
  ff();
}
f()
// const f2 = (name) => {
//   console.log(this);
// };

// f();
// f2('asd')

// console.log(globalThis);
// const obj1 = {
//   name: "hong",
//   m() {
//     console.log(this.name);
//   },
//   m2: () => {
//     console.log(this.name);
//   },
//   m3: function () {
//     const m4 = () => {
//       console.log(this);
//     };
//     m4();
//     console.log(this.name);
//   },
// };
// obj1.m();
// obj1.m3();
// const f = obj1.m3;

// obj1.m();
// obj1.m2();
// obj1.m3();
// if (obj[key] instanceof Function) {
//   newObj[key] = obj[key].bind(obj);
//   continue;
// }
// const obj = {
//   name: "hong",
//   age: 1,
//   f1: {
//     addr: "seoul",
//     f3: () => {
//       console.log(this);
//     },
//   },
//   f2() {
//     console.log(this.age);
//   },
// };
// const arrDeepCopy = (arr) => {
//   const newArr = [];
//   for (const value of arr) {
//     if (value instanceof Object) newArr.push(objDeepCopy(value));
//     else newArr.push(value);
//   }
//   return newArr;
// };

// const objDeepCopy = (obj) => {
//   if (!(obj instanceof Object)) return console.error("parameter is not object");
//   if (obj instanceof Array) return arrDeepCopy(obj);

//   const newObj = {};

//   for (const key of Reflect.ownKeys(obj)) {
//     if (obj[key] instanceof Array) newObj[key] = arrDeepCopy(obj[key]);
//     if (obj[key] instanceof Function) newObj[key] = obj[key].bind(obj);
//     if (typeof obj[key] === "object" && obj[key])
//       newObj[key] = objDeepCopy(obj[key]);
//     else newObj[key] = obj[key];
//   }
//   return newObj;
// };

// function a(ar) {
//   const newobj = {};
//   for (const key of Reflect.ownKeys(ar)) {
//     if (ar[key] instanceof Function) newobj[key] = ar[key].bind(ar);
//     else newobj[key] = ar[key];
//   }
//   return newobj;
// // }
// const newobj = objDeepCopy(obj);
// obj.f1.f3();
// newobj.f1.f3();
// console.log(obj.f1.f3 === newobj.f1.f3);
