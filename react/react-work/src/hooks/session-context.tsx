// import { createContext } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  description: string;
};
type Session = {
  id: number;
  cart: CartItem[];
};
type sessionContext = {
  session: Session;
};

// const sessionContext = createContext<Session>({

// });
