// src/components/Hello.tsx
import { memo, useEffect, useReducer } from 'react';
import { Sample } from './Sample';

type Props = {
  name: string;
  age: number;
  fn: () => void;
};

const Hello = memo(({ name, age, fn }: Props) => {
  // const [isActive, setActive] = useState(false);
  const [isActive, toggleActive] = useReducer((preAc) => !preAc, false);
  useEffect(() => {
    console.log('child fn>>', fn());
  }, [fn]);

  return (
    <>
      <h1>
        Hello, {name}({age})
      </h1>
      <h3>반갑습니다~</h3>
      Active : {isActive + ''}
      <button onClick={toggleActive}>acitveToggle</button>
      <hr />
      <Sample />
    </>
  );
});
export default Hello;
