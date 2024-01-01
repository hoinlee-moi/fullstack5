type Session = {
  user: User;
  cart: CartItem[];
};
type User = { id: number; name: string } | null;
type CartItem = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type VoidFn = () => void;
type NumberVoidFn = (id: number) => void;
