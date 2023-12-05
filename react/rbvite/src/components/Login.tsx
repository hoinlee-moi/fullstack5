// src/components/Login.tsx
import {
  FormEvent,
  forwardRef,
  useEffect,
  useRef,
  useImperativeHandle,
} from 'react';
import { LoginUser } from '../App';
type Props = {
  login: ({ id, name }: LoginUser) => void;
};

const Login = forwardRef(({ login }: Props, ref) => {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = idRef.current?.value;
    const name = nameRef.current?.value || '';
    login({ id: Number(id), name });
    nameRef.current?.focus();
  };

  const nameFocus = () => {
    if (nameRef.current) nameRef.current.focus();
  };
  useImperativeHandle(ref, nameFocus);
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
});
export default Login;
