import { createClient } from 'redis'

const redis = await createClient({ socket: { host: 'redis' } })
  .on('error', err => {
    console.error('Redis Client Error', err)
  })
  .connect()

export default redis
