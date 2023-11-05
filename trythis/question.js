const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};
function bill() {
  const orderList = {};
  const startEndLine = "=".repeat(23);
  const menuEndLine = "-".repeat(20).padStart(22, " ");
  const orderTemplateLiteral = (texts, ...value) => {
    console.log(
      `${texts[0].padStart(8, " ")}${value.toLocaleString().padStart(8, " ")}${
        texts[1]
      }`
    );
  };
  let priceSum = 0;
  let vatSum = 0;
  return {
    order(menuName) {
      if (!orderList[menuName]) {
        orderList[menuName] = {
          price: MENU[menuName].price,
          vat: MENU[menuName].taxfree
            ? 0
            : Math.round((MENU[menuName].price / 1.1) * 0.1),
          amount: 0,
        };
      }
      orderList[menuName].amount += 1;
      priceSum += MENU[menuName].price;
      vatSum += orderList[menuName].vat;
    },
    printBill() {
      console.log(startEndLine);
      for (const [menu, menuBill] of Object.entries(orderList)) {
        console.log(
          `* ${menu} ${menuBill.amount > 1 ? `${menuBill.amount}개` : ""}`
        );
        orderTemplateLiteral`공급가액: ${menuBill.price * menuBill.amount}원`;
        orderTemplateLiteral`부가세액: ${menuBill.vat * menuBill.amount}원`;
        console.log(menuEndLine);
      }
      orderTemplateLiteral`주문합계: ${priceSum}원`;
      orderTemplateLiteral`세액합계: ${vatSum}원`;
      console.log(startEndLine);
    },
  };
}

const table1 = bill();
table1.order("짜장");
table1.order("짬뽕");
table1.printBill();

table1.order("탕슉");
table1.printBill();

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>table2");
const table2 = bill();
table2.order("탕슉");
table2.order("탕슉");
table2.printBill();

// function bill() {
//   const orderList = [];
//   const startEndLine = `${"=".repeat(23)}`;
//   const menuEndLine = `${"-".repeat(20).padStart(22," ")}`;
//   const priceTemplateLiteral = (texts, value) => {
//     console.log(`${texts[0].padStart(8," ")}${value.toLocaleString().padStart(8, " ")}${texts[1]}`);
//   };
//   let priceSum = 0;
//   let vatSum = 0;
//   return {
//     order(menuName) {
//       const { price: menuPrice, taxfree = 0 } = MENU[menuName];
//       const menu = {
//         name: menuName,
//         price: menuPrice,
//         vat: taxfree ? 0 : Math.round((menuPrice / 1.1) * 0.1),
//       };
//       priceSum += menuPrice;
//       vatSum += menu.vat;
//       orderList.push(menu);
//     },
//     printBill() {
//       console.log(startEndLine);
//       for(const menu of orderList) {
//         console.log(`* ${menu.name}`);
//         priceTemplateLiteral`공급가액: ${menu.price}원`;
//         priceTemplateLiteral`부가세액: ${menu.vat}원`;
//         console.log(menuEndLine);
//       }
//       priceTemplateLiteral`주문합계: ${priceSum}원`;
//       priceTemplateLiteral`세액합계: ${vatSum}원`;
//       console.log(startEndLine);
//     },
//   };
// }
