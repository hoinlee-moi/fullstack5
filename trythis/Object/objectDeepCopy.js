import assert from "assert";

class Dog {
  name;
  constructor(name) {
    this.name = name;
  }
}
const lucy = new Dog("lusy");

const user = {
  null: null,
  "": 1,
  " ": 1, // 'id': 1, '0y': 2 모두 OK!
  123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
  12345: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
  true: 1, // OK  user[true]  user.true
  id: 2,
  bigint: BigInt(123),
  newNum: new Number(123),
  newBool: new Boolean(true),
  infini: Infinity,
  addr: { city: "pusan", village: { name: "homeTown" }, arr: [1, 2, 3, 4] },
  str: new String("aaa"),
  [`name`]: "Hong", // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
  [Symbol()]: "Hong", // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
  symbol: Symbol("leeee"),
  "my-friends": ["Han", "Kim"],
  getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
  getInfo2() {
    return `${this.id}-${this.name}`;
  }, // OK! getInfo의 최종 <f.o>
  dog: lucy,
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
