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


type ValueCombine<T, K> = T extends K ? T : T | K



// type Combine<T, V> = {}
type Combine<T, V> = {
    [key in keyof (T & V)]: T&V
}


type ICombined = Combine<IUser, IDept>;

const a: ICombined = {
    id: 1,
    age: 'ww',
    name: 'ss',
    dname: 'ss',
    captain: 'ss'
}