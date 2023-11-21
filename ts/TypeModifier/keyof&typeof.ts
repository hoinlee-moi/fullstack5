// 문제1) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.

const cart = {
    X: 1,
    Y: 2,
    Z: 3,
};

type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart


// 문제2) 다음에서 T3과 동일한 타입으로 T4를 정의하시오.

const constCart = {
    X: 1,
    Y: 2,
    Z: 3,
} as const;

type TT = keyof typeof constCart

type T3 = 1 | 2 | 3;
type T4 = typeof constCart[TT]
// type T4 = typeof constCart[keyof typeof constCart]

// to Generic
type T5<T> = T[keyof T]
type T6 = T5<typeof constCart>
  export{}