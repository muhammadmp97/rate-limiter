import redis from '../clients/redis.js'
import rateLimitations from '../config/rate-limitations.js'

export default async (req, res, next) => {
  const route = rateLimitations[req.path] ?? rateLimitations['default']
  const key = `rl:user:${req.ip}:${route.name}`

  await redis.set(key, 0, {
    EX: route.period,
    NX: true
  })

  const requestsCount = await redis.incr(key)

  if (requestsCount == route.allowedRequests + 1) {
    console.log(`A user with ip ${req.ip} was blocked!`)
  }

  if (requestsCount > route.allowedRequests) {
    return res.status(429).send('Many attempts!')
  }

  next()
}
