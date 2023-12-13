//practice 02

const arr2 = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

const objectFromEntries = (arr) => {
  const newObj = {};
  for (const [key, ...value] of arr) {
    newObj[key] = value;
  }
  return newObj;
};

const newObj = objectFromEntries(arr2);
console.log(newObj);

const arrayFromObject = (obj) => {
  const newArr = [];
  for (const key of Object.keys(obj)) {
    newArr.push([key, ...obj[key]]);
  }
  return newArr;
};
const newArr = arrayFromObject(newObj);
console.log(newArr);
const newObj02 = objectFromEntries(newArr);
console.log(newObj02);
