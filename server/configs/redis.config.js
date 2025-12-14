// import redis from 'redis'
// import ENV_CONFIG from './env.config.js'

// const redisClient = redis.createClient({
//   password: ENV_CONFIG.REDIS.PASSWORD,
//   socket: {
//     host: ENV_CONFIG.REDIS.HOST,
//     port: ENV_CONFIG.REDIS.PORT,
//   },
// })

// export async function connectRedis() {
//   redisClient.connect()
//   redisClient.on('connect', function () {
//     console.log('Connected to Redis')
//   })

//   redisClient.on('error', function (err) {
//     console.error(`Error connecting to Redis: ${err}`)
//   })
// }

// export default redisClient
import { createClient } from 'redis'
import ENV_CONFIG from './env.config.js'

let redisClient = null

export async function connectRedis() {
  // ✅ Nếu chưa cấu hình Redis → bỏ qua
  if (!ENV_CONFIG.REDIS?.HOST || !ENV_CONFIG.REDIS?.PORT) {
    console.log('Redis disabled')
    return
  }

  redisClient = createClient({
    password: ENV_CONFIG.REDIS.PASSWORD || undefined,
    socket: {
      host: ENV_CONFIG.REDIS.HOST,
      port: Number(ENV_CONFIG.REDIS.PORT),
    },
  })

  redisClient.on('connect', () => {
    console.log('Connected to Redis')
  })

  redisClient.on('error', (err) => {
    console.error('Redis error:', err)
  })

  await redisClient.connect()
}

export default redisClient
