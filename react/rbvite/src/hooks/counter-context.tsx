import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';

type CounterContextProps = {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
};

const CounterContext = createContext<CounterContextProps>({
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
});

const reducer = (
  count: number,
  { type, payload = 1 }: Action<'plus' | 'minus', number>
) => {
  switch (type) {
    case 'plus':
      return count + payload;
    case 'minus':
      return count - payload;
    default:
      return count;
  }
};

const CounterProvider = ({ children }: PropsWithChildren) => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);

  const plusCount = () => dispatch({ type: 'plus', payload: 2 });
  const minusCount = () => dispatch({ type: 'minus', payload: 5 });
  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

// eslint-disable-next-line react-refresh/only-export-components
export { CounterProvider, useCounter };
