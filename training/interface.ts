const STONE = 0
const PAPER = 1
const SCISSORS = 2

interface HandGenerator {
  generate(): number
}

class RandomHandGenerator implements HandGenerator {
    /*
    0,1,2をランダムで生成する関数
    */
    generate(): number {
        return Math.floor(Math.random() * 3)
    }
    
    genareteArray(): number[] {
        // たくさん手を生成する関数
        return []
    }
}


class Janken {
    /*
    ジェンケンをプレイする関数
    */
    play(handGenerator: HandGenerator) {
        const computerHand = handGenerator.generate()
        console.log(`computerHand = ${computerHand}`)
        // 勝敗判定などが続く...
    }
}

const janken = new Janken()
const generator = new RandomHandGenerator()
janken.play(generator)//結果 computerHand = 1〜3のどれか


class StoneHandGenerator implements HandGenerator {
    generate(): number {
        return STONE
    }
}

const generator2 = new StoneHandGenerator()
janken.play(generator2)//結果 computerHand = 0
