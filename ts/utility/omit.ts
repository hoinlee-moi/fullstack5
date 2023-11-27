type User = { id: number; name: string; age: number };

// ex) 다음 UserProfile 타입을 type 또는 interface로 정의하시오.
type UserProfile = Omit<User, "age"> & { addr: string };
interface UserProfile2 extends Omit<User, "age"> {
  addr: string;
}

let iUser: UserProfile = { id: 1, name: "Hong", addr: "Seoul" };
let iUser2: UserProfile2 = { id: 1, name: "Hong", addr: "Seoul" };

export {};
