const f = (text, ...values) => {
  console.log(text[0].padStart(8, "#"));
  console.log(text)
};
const money = 1000;
const tt = 20;
const tt2 = 5;
f`종합가격 : ${money} , ${tt} , ${tt2}`;
