function discount() {
    const dcRate = 0.1;         // private variable
    return function (price) {   // 내부함수(:외부에서 dcRate 참조 가능하도록하는 함수를 반환)
      return price * dcRate;    // dcRate를 외부에서 직접 접근 못하지만 이 함수는 가능
    };                          // 즉, 외부에서 현재 할인율을 알 수는 없음!
  }
  
  const items = [
    { item: '상품 A', price: 32000 },  { item: '상품 B', price: 45000 },
  ];
  const dc = discount();
  for (const { item, price: orgPrice } of items) {
    const salePrice = orgPrice - dc(orgPrice);
    console.log(`${item}: ${orgPrice}원 --> ${salePrice.toLocaleString()}원`);
  }
  