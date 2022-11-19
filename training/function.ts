function mull(v1: number, v2: number): number{
    return v1 * v2
}
const result = mull(1, 2)
console.log(result)
//結果 2

// 型推論
function mull2(v1: number, v2: number){
    return v1 * v2
}
const result2_1 = mull2(10, 20)
console.log(result2_1)
//結果 200

// const result2_2 = mull2('やあ', '世界')
// console.log(result2_2)
//結果 エラー

function mull3(v1: any, v2: any){
    return v1 * v2
}

const result3_1 = mull3(100, 200)
console.log(result3_1)
//結果 20000

const result3_2 = mull3('hello', 'world')
console.log(result3_2)
//結果 NaN ->想定外 anyはあまり使わない