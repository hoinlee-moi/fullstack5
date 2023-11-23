import localdata from "../localdata.json" assert { type: "json" };
const LINE2 = localdata.LINE2;
class Subway {
  #currIdx;
  #end;
  #isEnd = false;
  constructor(start, end) {
    this.#currIdx = LINE2.indexOf(start);
    this.#end = end;
  }

  //   *[Symbol.iterator]() {
  //     while (true) {
  //       if (this.#isEnd) return;
  //       if (this.#currIdx === LINE2.length) this.#currIdx = 0;
  //       const value = LINE2[this.#currIdx++];
  //       this.#isEnd = value === this.#end;
  //       yield value;
  //     }
  //   }
  goNext() {
    if (this.#currIdx === LINE2.length) this.#currIdx = 0;
    const value = LINE2[this.#currIdx++];
    this.#isEnd = value === this.#end;
    return value;
  }
  *[Symbol.iterator]() {
    while (true) {
      if (this.#isEnd) return;
      yield this.goNext();
    }
  }
}

const routes = new Subway("신도림", "을지로입구"); // 48
const it1 = routes[Symbol.iterator]();
let cnt = 0;
for (const s of routes) {
  console.log("curr station is", s, ++cnt);
}
