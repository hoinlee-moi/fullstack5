// src/components/Hello.tsx
import { memo, useReducer } from 'react';
import { Sample } from './Sample';
import { useSession } from '../hooks/session-context';

const Hello = memo(() => {
  const {
    session: { loginUser },
  } = useSession();
  const [isActive, toggleActive] = useReducer((preAc) => !preAc, false);

  return (
    <>
      <h1>
        Hello, {loginUser?.name}({loginUser?.id})
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
