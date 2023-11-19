/* 방법 1*/
const SIZE = [
  { id: "X", price: 1000 },
  { id: "Y", price: 2000 },
  { id: "Z", price: 3000 },
] as const;

const cart = {
  X: 1,
  Y: 2,
  Z: 3,
};

const total = SIZE.reduce((curr, size) => curr + cart[size.id] * size.price, 0);
 /*방법 2 */

 const SIZE2 = [
    { id: 'X', price: 1000 },
    { id: 'Y', price: 2000 },
    { id: 'Z', price: 3000 },
];

const cart2 = {
    X: 1,
    Y: 2,
    Z: 3
};

const total2 = SIZE.reduce((curr, size) =>{
    const id = size.id as keyof typeof cart2
    return id in cart2? curr + (cart2[id] ) * size.price : curr
    }, 0);