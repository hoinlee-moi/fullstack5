import { PropsWithChildren } from 'react';

type Props = {
  name: string;
  age: number;
  obj: any;
  //   children: React.ReactNode;
  children: React.ReactNode;
};

// const Hello = ({ name, age, obj, children }: PropsWithChildren<Props>) => {
const Hello = ({ name, age, obj, children }: Props) => {
  obj.age = 40;
  return (
    <>
      <h1>
        Hello, {name} {age}
      </h1>
      <h3>children : {children}</h3>
      <div>
        <h2>
          hello, another {obj.name} {obj.age}
        </h2>
      </div>
    </>
  );
};

export default Hello;
