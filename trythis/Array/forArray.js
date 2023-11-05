arr = [1, 4, 9];

const powSqrtByForOf = (arr) => {
  const x = [], y = [];
  for (const value of arr) {
    x.push(value ** 2);
    y.push(Math.sqrt(value));
  }
  return [x, y];
};
const powSqrtByForEach = (arr) => {
  const x = [], y = [];
  arr.forEach((value) => {
    x.push(value ** 2);
    y.push(Math.sqrt(value));
  });
  return [x, y];
};
const powSqrtByMap = (arr) => {
  const x = [], y = [];
  arr.map((value) => {
    x.push(value ** 2);
    y.push(Math.sqrt(value));
  });
  return [x, y];
};
console.log(powSqrtByForOf(arr)); // [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByForEach(arr)); // [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByMap(arr)); // [[1, 16, 81], [1, 2, 3]]
