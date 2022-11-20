import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'

const PORT = 3000

const app = express()

app.use(morgan('dev'))

app.get('/api/hello', async (req, res) => {
  res.json({
    message: 'Hello Express'
  })
})

app.get('/api/error', async (req, res) => {
    throw new Error('Error endpoint')
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`リバーシのアプリケーションがスタートしました: http://localhost:${PORT}`)
})

function errorHandler(
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) {
    console.error('Unexpected error occurred', err)
    res.status(500).send({
      message: '予期しないエラーが起きました'
    })
}