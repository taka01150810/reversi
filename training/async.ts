import fs from 'fs'
import util from 'util'

// プロミスというものを使う新しいpromisifyReadFileという変数を作成
const promisifyReadFile = util.promisify(fs.readFile)

function main() {
  let fileContent: string = 'Not loaded'

  //非同期処理 処理が進んでいるときにその処理を止めずに別途処理を行うこと
  //ファイルの読み込みが終わったら実行する readFile
  fs.readFile('package.json', (err, data) => {
    // promisifyReadFileはファイルを読み込むという約束をしている
    const readFilePromise = promisifyReadFile('package.json')

    // 約束が果たされたら処理を行う
    readFilePromise.then((data) => {
      const fileContent = data.toString()
      console.log(fileContent)
      /* 結果
      {
        "name": "tp1",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC",
        "devDependencies": {
          "@types/node": "^18.11.9",
          "ts-node": "^10.9.1",
          "typescript": "^4.8.3"
        }
      }
      */
    })
  })

  console.log(fileContent)
  //結果 Not loaded
}

main()
