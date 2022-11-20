// 普通の関数
function add1(v1: number, v2: number): number {
    return v1 + v2
}

const result1 = add1(1, 2)
console.log(`result1 = ${result1}`) //結果 result1 = 3

// 関数を変数に代入する
const add2 = function (v1: number, v2: number): number {
    return v1 + v2
}

console.log(add2)//結果 [Function: add2]


const result2 = add2(2, 3)
console.log(`result2 = ${result2}`)//結果 result1 = 5

// アロー関数
const add3 = (v1: number, v2: number) => {
    return v1 + v2
}

const result3 = add3(3, 4)
console.log(`result3 = ${result3}`)//結果 result1 = 7
  