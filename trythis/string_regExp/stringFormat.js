const fmt = (texts, ...value) =>
  `${texts[0]}${value.toLocaleString().padStart(8, " ")}${
    texts[1]
  }`;

const total = { price: 45000, vat: 4500 };
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);
