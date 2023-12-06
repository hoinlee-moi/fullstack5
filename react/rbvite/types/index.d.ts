type LoginUser = { id: number; name: string };
type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};
type Cart = { id: number; name: string; price: number };
type CartItem = {
  name: string;
  price: number;
};
