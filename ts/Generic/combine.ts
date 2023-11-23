type IUser = {
  id: number;
  age: number;
  name: string;
};

type IDept = {
  id: number;
  age: string;
  dname: string;
  captain: boolean;
};

type Differ<K, Type> = K extends Type ? never : K;

type InterProperty<T, U> = {
  [key in keyof (T | U)]: T[key] | U[key];
};

type Combine<T, U> = InterProperty<T, U> & {
  [key in Differ<keyof (T & U), keyof (T | U)>]: (T & U)[key];
};

type Combine2<T, U> = {
  [key in keyof (T & U)]: (T & U)[key] extends never
    ? key extends keyof T & keyof U
      ? T[key] | U[key]
      : never
    : (T & U)[key];
};

type Combine3<T, U> = {
  [key in keyof (T & U)]: key extends keyof (T | U)
    ? T[key] | U[key]
    : (T & U)[key];
};

type ICombined = Combine<IUser, IDept>;
type ICombined2 = Combine2<IUser, IDept>;
type ICombined3 = Combine3<IUser, IDept>;

// type A = InterProperty<IUser, IDept>;

const a: ICombined = {
  id: 2,
  age: 2,
  name: "dd",
  dname: "ss",
  captain: false,
};
export {};

// type Combine2<T, V> = {
//   [key in keyof (T & V)]: (T & V)[key] extends never
//     ? T[key] | V[key]
//     : (T & V)[key];
// }; // error 아직 있음

// type ICombined2 = Combine2<IUser, IDept>;
// const aa: ICombined2 = {
//     id: 2,
//     age: "ss",
//     name: "dd",
//     dname: "ss",
//     captain: "ss",
// };

// type InterProperty<T, V> = {
//   [key in keyof (T | V)]: (T & V)[key] extends never
//     ? T[key] | V[key]
//     : (T & V)[key];
// };
