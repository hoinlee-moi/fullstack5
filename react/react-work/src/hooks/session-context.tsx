// import { createContext } from 'react';

type Session = {
  id: number;
  cart: CartItem[];
};
type sessionContext = {
  session: Session;
};

// const sessionContext = createContext<Session>({

// });
