interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}



type Change<T, K extends keyof T, V> = Omit<T, K> & { [key in K]: V };

type Change2<T, K extends keyof T, V> = {
  [key in keyof T] : key extends K ? V : T[key]
};

type DeptCatain = Change<IDept, "captain", IUser>;
type DeptCatain2 = Change2<IDept, "captain", IUser>;

type Err = Change<IDept, 'somekey', IUser>; //ERR
type Err2 = Change2<IDept, 'somekey', IUser>; //ERR

const a: DeptCatain = {
  id: 1,
  age: "string",
  dname: "string",
  captain: {
    id: 1,
    age: 2,
    name: "string",
  },
};

export{}
