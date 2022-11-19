/*
普通のクラスを使う場合
変数の上書きはできる
*/
class Fraction {
    numerator: number
    demominator: number

    constructor(numerator: number, demominator: number){
        this.numerator = numerator
        this.demominator = demominator
    }
}

const f1 = new Fraction(1, 2)
console.log(f1.numerator) //結果 1
console.log(f1.demominator) //結果 2

f1.numerator = 3
console.log(f1.numerator) //結果 3 ->上書きできるのであまり好ましくない

/*
private を使う場合
変数の上書きはできない
外では変数は使えない
*/
class Fraction2 {
    private numerator: number
    private demominator: number

    constructor(numerator: number, demominator: number){
        this.numerator = numerator
        this.demominator = demominator
    }
}

const f2 = new Fraction2(1, 2)
// console.log(f2.numerator) //結果 関数の外なので使えない
// console.log(f2.demominator) //結果 関数の外なので使えない

// f2.numerator = 3 // 上書きできない
// console.log(f2.numerator)
//結果 エラー


/*
getter を使う場合
変数の上書きはできない
外でも変数は使える
*/
class Fraction3 {
    private _numerator: number
    private _demominator: number

    constructor(numerator: number, demominator: number){
        this._numerator = numerator
        this._demominator = demominator
    }

    // getter
    get numerator(): number{
        return this._numerator
    }

    get demominator(): number {
        return this._demominator
    }
}

const f3 = new Fraction3(2, 3)
console.log(f3.numerator) //結果 2
console.log(f3.demominator) //結果 3

// f3.numerator = 3  // ここで上書きできない
console.log(f3.numerator) //結果 2

/*
省略形
*/
class Fraction4 {

    constructor(private _numerator: number, private _demominator: number){}

    get numerator(): number{
        return this._numerator
    }

    get demominator(): number {
        return this._demominator
    }
}
const f4 = new Fraction4(4, 5)
console.log(f4.numerator) //結果 4
console.log(f4.demominator) //結果 5

// f4.numerator = 3  // ここで上書きできない
console.log(f4.numerator) //結果 4