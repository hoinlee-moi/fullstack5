type IUser = {
  id: number;
  age: number;
  name: string;
};

type IDept = {
  id: number;
  age: string;
  dname: string;
  captain: string;
};

type Differ<K, Type> = K extends Type ? never : K;

type InterProperty<T, V> = {
  [key in keyof (T | V)]: T[key] | V[key];
};

type Combine<T, V> = InterProperty<T, V> & {
  [key in Differ<keyof (T & V), keyof (T | V)>]: (T & V)[key];
};

type ICombined = Combine<IUser, IDept>;
// type A = InterProperty<IUser, IDept>;


const a: ICombined = {
  id: 2,
  age: 2,
  name: "dd",
  dname: "ss",
  captain: "ss",
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
