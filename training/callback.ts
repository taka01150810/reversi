function add(v1: number, v2: number): number {
    return v1 + v2
}

// 別の関数を引数にする -> コールバック
function calculate(
    v1: number,
    v2: number,
    callback: (a: number, b: number) => number
): number {
    return callback(v1, v2)
}

const addResult = calculate(1, 2, add)
console.log(addResult)//結果 3

function multiply(v1: number, v2: number): number {
    return v1 * v2
}

const multiplyResult = calculate(1, 2, multiply)
console.log(multiplyResult)//結果 2

//  実際のコールバック関数の事例
function hello() {
    console.log('hello')
}

setTimeout(hello, 5000) //結果 5秒経ったら hello

// setTimeout(hello(), 5000) //結果 helloの返り値は関数ではないためエラー

// アロー関数にすると
const hello2 = () => {
    console.log('hello2')
}

setTimeout(hello2, 5000)

//アロー関数だと上記をこのようにまとめることもできる
setTimeout(() => {
    console.log('hello3')
}, 5000)
