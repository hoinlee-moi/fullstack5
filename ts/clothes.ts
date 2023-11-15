/*방법 1 */
const SIZE = [
    { id: 'X', price: 1000 },
    { id: 'Y', price: 2000 },
    { id: 'Z', price: 3000 },
  ]
  
  const cart = {
    X: 1,
    Y: 2,
    Z: 3
  };
  
  // const total = SIZE.reduce((curr, size) =>
  //   curr + cart[(size.id as keyof typeof cart)] * size.price, 0);
  
  const total = SIZE.reduce((curr, size) => {
    const id = size.id as keyof typeof cart;
    return id in cart ? curr + cart[id] * size.price : curr
  }, 0)
  
  /* 방법 2 */
  const SIZE2 = [
    { id: 'X', price: 1000 },
    { id: 'Y', price: 2000 },
    { id: 'Z', price: 3000 },
  ]
  
  const cart2 = {
    X: 1,
    Y: 2,
    Z: 3
  };
  
  const total2 = SIZE2.reduce((curr, size) =>
    curr + cart2[size.id as "X" | "Y" | "Z"] * size.price, 0);
  
  /*방법 3 */
  
  const SIZE3 = [
    { id: 'X', price: 1000 },
    { id: 'Y', price: 2000 },
    { id: 'Z', price: 3000 },
  ]
  
  const cart3 = {
    X: 1,
    Y: 2,
    Z: 3
  }
  
  
  const total3 = SIZE3.reduce((curr, size) => {
    const count = Object.entries(cart3).find(v => v[0] === size.id)
    return count ? curr + count[1] * size.price : curr
  }, 0);
  