const numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
console.log(numbers)
/* 結果
[
   0, 10, 20, 30, 40,
  50, 60, 70, 80, 90
]
*/

numbers.forEach((num) => {
  const double = num * 2
  console.log(double)
})
//結果 20. 40 60 80 100 120 140 160 180

numbers.forEach((num, i) => {
  console.log(`${i}: ${num}`)
})
/* 結果
0: 0
1: 10
2: 20
3: 30
4: 40
5: 50
6: 60
7: 70
8: 80
9: 90
*/

/*
配列の各要素を変換して別の配列を作りたい場合 mapを使う
mapはコールバックにどのような変換を行うかを書く
*/
const names = ['Alice', 'Bob', 'Carol']
const users = names.map((name, i) => {
  return {
    id: i,
    name: name
  }
})
console.log(users)
/* 結果
[
  { id: 0, name: 'Alice' },
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Carol' }
]
*/

// 配列の一部の要素だけを取り出したい時 filter
const evenIdUsers = users.filter((user) => {
  return user.id % 2 === 0
})
console.log(evenIdUsers)
// 結果 [ { id: 0, name: 'Alice' }, { id: 2, name: 'Carol' } ]

// 上記を短く書くと
const oddIdUsers = users.filter((user) => user.id % 2 === 1)
console.log(oddIdUsers)
//結果 [ { id: 1, name: 'Bob' } ]

// 配列からcallbackの操作をした結果1個の値を得る reduce
const sum = numbers.reduce((previous, current) => previous + current, 0)
console.log(sum)
//結果 450