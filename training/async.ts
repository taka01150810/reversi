import fs from 'fs'
import util from 'util'

// プロミスというものを使う新しいpromisifyReadFileという変数を作成
const promisifyReadFile = util.promisify(fs.readFile)

// awaitとasyncはセット
async function main() {
  // 約束を果たすのを待ってくれる await
  const data = await promisifyReadFile('package.json')
  const fileContent = data.toString()
  console.log(fileContent)
}

main()
