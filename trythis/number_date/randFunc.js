const rand = (start, end) =>
  start + Math.floor(Math.random() * (end - start + 1));

const randMap = () => {
  const map = new Map();
  for (let i = 0; i <= 1000000000; i += 1) {
    const num = rand(1, 10);
    map.set(num, map.get(num) ? map.get(num) + 1 : 1);
  }
  return map;
};

console.log(randMap());
