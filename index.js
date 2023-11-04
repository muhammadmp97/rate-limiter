import express from 'express'
import redis from './src/clients/redis.js'
import rateLimiter from './src/middlewares/rate-limiter.js'

const app = express()
const port = process.env.npm_config_port ?? 3000

app.use(rateLimiter)

app.get('/', async (req, res) => {
  res.send('Hello World!')
})

app.get('/about', async (req, res) => {
  res.send('It is me!')
})

app.get('/somewhere', async (req, res) => {
  res.send('SOMEWHERE')
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})

app.on('close', () => {
  redis.quit()
})
