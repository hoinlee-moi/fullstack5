for(let i =1; i<=10; i+=1) {
    const sqrtNum = Math.sqrt(i)
    if(isIrratinal(sqrtNum)) printSqrtNum(sqrtNum,3)
    else console.log("...")
}

// function printSqrtNum(num,digit) {
//     const targetDigit = 10**digit
//     const truncNum =Math.trunc( num *targetDigit)
//     console.log(truncNum/targetDigit)
// }
function printSqrtNum(num,digit) {
    console.log(num.toFixed(digit))
}

function isIrratinal(num) {
    const numArray = num.toString().split(".")
    if(numArray.length>1) {
        return true
    }
    return false
}
console.log(Math.sqrt(7))