import { PropsWithChildren, createContext, useState, useContext } from 'react';

type SessionContextProps = {
  session: Session;
  login: ({ id, name }: LoginUser) => void;
  logout: () => void;
  saveCartItem: ({ name, price }: CartItem) => void;
  modifyCartItem: ({ id, name, price }: Cart) => void;
  deleteCartItem: (id: number) => void;
};

const SessionContext = createContext<SessionContextProps>({
  session: { loginUser: null, cart: [] },
  login: () => {},
  logout: () => {},
  saveCartItem: () => {},
  modifyCartItem: () => {},
  deleteCartItem: () => {},
});

const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>({
    loginUser: null,
    cart: [],
  });
  const login = ({ id, name }: LoginUser) =>
    setSession({
      ...session,
      loginUser: { id, name },
    });

  const logout = () => setSession({ ...session, loginUser: null });

  const saveCartItem = ({ name, price }: CartItem) => {
    const id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
    setSession({ ...session, cart: [...session.cart, { id, name, price }] });
  };

  const modifyCartItem = ({ id, name, price }: Cart) => {
    const newCartList = session.cart.map((item) =>
      item.id === id ? { id, name, price } : item
    );
    setSession({ ...session, cart: newCartList });
  };

  const deleteCartItem = (id: number) => {
    const newCartList = session.cart.filter((item) => item.id !== id);
    setSession({ ...session, cart: newCartList });
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        login,
        logout,
        saveCartItem,
        modifyCartItem,
        deleteCartItem,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
const useSession = () => useContext(SessionContext);
// eslint-disable-next-line react-refresh/only-export-components
export { SessionProvider, useSession };
