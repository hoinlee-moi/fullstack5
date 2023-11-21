const arr = [];
function f2() {
  function Bee() {   // Bee = function() { conso…}
    console.log('f2.Bee');   // → return i;
  }
  let z = 0;
  for (let i = 0; i < 2; i += 1) {
    const x = i + 1;
    z = 1;
    function Bee() {   // 실행시 <f.o>로 인정! Bee = function() { return i; }
      return i;
    }
    arr.push(Bee);
    console.log(i, Bee()); // 0, 0
  }

  console.log(arr[0] === arr[1], arr[1] === Bee, z); // false, true, 1
  console.log('f2>>', Bee()); // 1
}
f2();
