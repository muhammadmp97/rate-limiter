import { createClient } from 'redis'

const redis = await createClient()
  .on('error', err => console.log('Redis Client Error', err))
  .connect()

export default redis
