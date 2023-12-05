// src/components/Login.tsx
import { FormEvent, useEffect, useRef } from 'react';
type Props = {
  login: (id: number, name: string) => void;
};

const Login = ({ login }: Props) => {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = idRef.current?.value;
    const ps = nameRef.current?.value || '';
    login(Number(id), ps);
    nameRef.current?.focus();
  };

  useEffect(() => {
    // if (idRef.current) idRef.current.value = '0';
    if (nameRef.current) nameRef.current.focus();
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
