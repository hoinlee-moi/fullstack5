// class NumericGrade {
//     value: number | string = 0; // number
// }

// class VagueGrade extends NumericGrade {
//     value = Math.random() > 0.5 ? 1 : '...'; // number | string
//     // Error : Property 'value' in type 'VagueGrade' is not assignable to the same property in base type 'NumericGrade'.
//     // Type 'string | number' is not assignable to type 'number'.
//     // Type 'string' is not assignable to type 'number'.

// } // VagueGrade의 value는 기본 클래스 NumericGrade의 number 타입에 | string을 추가하려고 하므로 타입 오류가 발생함

// const instance4: NumericGrade = new VagueGrade();

// // 예상한 타입 : number
// // 실제 타입 : number | string
// instance4.value;

// // ex) 오류를 피하려면??

const isString = (value: unknown): value is [string, number] => Array.isArray(value) &&
    typeof value[0] === 'string' && typeof value[1] === 'number'


const f1 = (value: number | string | boolean | [string, number] | {} | [number, string]) => {
    if (isString(value)) {
        console.log('실행함', value[0].toUpperCase(), value[1].toFixed());
    }
};


interface Animal { }
interface Dog extends Animal {
    name: string;
}
interface Cat extends Animal {
    punch(): void;
}

function isDog(a: Animal): a is Dog {
    return 'name' in a && typeof a.name === 'string'
}

function isDog2(a: Animal): a is Dog {
    return !('punch' in a && typeof a.punch === 'function')
}




class GetCat implements Cat {
    punch() { console.log('maw') }
}
const dog1 = {
    name: 'ho'
}
const cat1 = {
    punch() { console.log('maw!') }
}
const cat2 = new GetCat()

const result = isDog2(dog1)
const result2 = isDog2(cat1)
const result3 = isDog2(cat2)


console.log(result)
console.log(result2)
console.log(result3)