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

// type ChangeV2<T, K extends keyof T, V> = T ex & { [key in K]: V };

type DeptCatain = Change<IDept, "captain", IUser>;

// type Err = Change<IDept, 'somekey', IUser>; //ERR

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
