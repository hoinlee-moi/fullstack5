import { PropsWithChildren, createContext, useState, useContext } from 'react';
import { useFetch } from './fetch-hook';

type SessionContextProps = {
  session: Session;
  login: ({ id, name }: LoginUser) => void;
  logout: () => void;
  saveCartItem: ({ id, name, price }: Cart) => void;
  deleteCartItem: (id: number) => void;
};

const SessionContext = createContext<SessionContextProps>({
  session: { loginUser: null, cart: [] },
  login: () => {},
  logout: () => {},
  saveCartItem: () => {},
  deleteCartItem: () => {},
});

const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>({
    loginUser: null,
    cart: [],
  });
  const [useSessionFetch] = useFetch();
  const fetchSetSession = (data: Session) => setSession(data);
  useSessionFetch('/data/sample-logined.json', fetchSetSession);
  useSessionFetch('/data/sample-logined.json', fetchSetSession);
  useSessionFetch('/data/sample-logined.json', fetchSetSession);
  // useEffect(() => {
  //   const url = '/data/sample.json';
  //   const controller = new AbortController();
  //   const { signal } = controller;
  //   fetch(url, { signal })
  //     .then((res) => res.json())
  //     .then((data) => setSession(data))
  //     .catch((err) => console.error(err));
  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  const login = ({ id, name }: LoginUser) =>
    setSession({
      ...session,
      loginUser: { id, name },
    });

  const logout = () => setSession({ ...session, loginUser: null });

  const saveCartItem = ({ id, name, price }: Cart) => {
    const { cart } = session;
    id = id || Math.max(...session.cart.map((item) => item.id), 0) + 1;
    const item = id ? session.cart.find((item) => item.id === id) : null;
    if (item) {
      item.name = name;
      item.price = price;
    } else {
      cart.push({ id, name, price });
    }
    setSession({ ...session, cart: cart });
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
