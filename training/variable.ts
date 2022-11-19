//型注釈
const v1:number = 1
console.log(v1)

let v2:number =2
// v2 = 'Hello World'
console.log(v2)
//結果 エラー

//型の推論
let v3 = 3
console.log(v3)

// 推論以外の型入れることができない
let v4 = 4
// v4 = 'やあ'
console.log(v4)
//結果 エラー

let v5: number | string = 5
v5 = 'やあ'
console.log(v5)

// const arr1 = []
// arr1.push(1)
// console.log(arr1)
//結果 エラー

const arr2: number[] = []
arr2.push(2)
console.log(arr2)
