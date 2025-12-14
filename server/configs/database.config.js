// import mongoose from "mongoose";
// import ENV_CONFIG from "./env.config.js";

// export async function connectMongoDB() {
//   mongoose
//     .connect(ENV_CONFIG.MONGODB.URI, {
//       dbName: ENV_CONFIG.MONGODB.DB_NAME,
//     })
//     .then(function (value) {
//       console.log("Connected to MongoDB:: " + value.connections[0].name);
//     })
//     .catch(function (err) {
//       console.error("Failed to connect to MongoDB:: " + err?.message);
//       process.exit(1);
//     });
// }
import mongoose from 'mongoose'
import ENV_CONFIG from './env.config.js'

export async function connectMongoDB() {
  try {
    if (!ENV_CONFIG.MONGODB?.URI) {
      throw new Error('Missing MONGODB_URI')
    }

    await mongoose.connect(ENV_CONFIG.MONGODB.URI)

    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message)
    process.exit(1)
  }
}
