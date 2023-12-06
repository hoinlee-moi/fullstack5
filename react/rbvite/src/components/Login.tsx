// src/components/Login.tsx
import { FormEvent, useEffect, useRef } from 'react';
import { useSession } from '../hooks/session-context';

const Login = () => {
  const { login } = useSession();
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = idRef.current?.value;
    const name = nameRef.current?.value || '';
    if (!id) {
      alert('ID를 정확히 입력해주세요!');
      return idFocus();
    }
    if (!name) {
      alert('이름을 정확히 입력해주세요!');
      return nameFocus();
    }
    login({ id: Number(id), name });
  };

  const nameFocus = () => {
    if (nameRef.current) nameRef.current.focus();
  };
  const idFocus = () => {
    if (idRef.current) idRef.current.focus();
  };

  // useImperativeHandle(ref, () => ({ nameFocus }));

  useEffect(() => {
    nameFocus();
  }, []);

  return (
    <form onSubmit={submit}>
      <div>
        Login ID(숫자): <input type='number' ref={idRef} defaultValue={0} />
      </div>
      <div>
        Login Name: <input type='text' ref={nameRef} />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
};
export default Login;
