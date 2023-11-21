import assert from "assert";

class Dog {
  name;
  constructor(name) {
    this.name = name;
  }
}
const lucy = new Dog("lusy");
const user = {
  nid: 3,
  addr: { city: "pusan", village: { name: "homeTown" }, arr: [1, 2, 3, 4] },
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
  xx: null,
  yy: (a) => {
    return a;
    this.addr;
  },
  yyy(x, y) {
    return this.oo;
  },
  [Symbol()]: 9,
  [Symbol()]: Symbol("symbol2"),
  dog: lucy,
  sobj: new String("abc"),
  nobj: new Number(123),
  bobj: new Boolean(true),
  [Symbol()]: Object(Symbol("symbol3")),

  zs: new Set([arr, hong]),
  zws: new WeakSet([arr, hong]),
  zm: new Map([[hong, arr]]),
  zwm: new WeakMap([[hong, arr]]),
};

function funcDeepCopy(obj) {
  const funcString = obj.toString();
  const bracketIdx = obj.toString().indexOf("(");
  const newFuncString =
    funcString[0] === "("
      ? `return ${funcString}`
      : `return function ${funcString.slice(bracketIdx)}`;
  const newFunc = new Function(newFuncString);

  return newFunc();
}

const objDeepCopy = (obj) => {
  if (typeof obj === "function") return funcDeepCopy(obj);
  if (typeof obj !== "object" || obj === null) return obj;
  // if (obj instanceof String || obj instanceof Boolean || obj instanceof Number)
  //   return new obj.constructor(obj);
  const value = obj.valueOf();
  const copiedObj = new obj.constructor(typeof value !== "object" ? value : {});
  for (const key of Reflect.ownKeys(obj))
    copiedObj[key] = objDeepCopy(obj[key]);

  return copiedObj;
};

const newObj = objDeepCopy(user);

user["my-friends"][0] = 10;
user.name = "lee";
person.addr.city = "seoul";
person.addr.village.name = "chon";
person.addr.arr[2] = 100;
assert.notDeepStrictEqual(newObj, user);
