type Action<T, U> = { type: T; payload?: U };
type OutletContext = {
  currItem: Cart;
  deleteCartItem: (id: number) => void;
};
