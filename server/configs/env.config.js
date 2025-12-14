// import dotenv from 'dotenv'
// dotenv.config()

// const ENV_CONFIG = {
//   // CLOUDINARY
//   CLOUDINARY: {
//     CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
//     API_KEY: process.env.CLOUDINARY_API_KEY,
//     API_SECRET: process.env.CLOUDINARY_API_SECRET,
//     PRESET: process.env.CLOUDINARY_PRESET,
//     FOLDER_NAME: process.env.CLOUDINARY_FOLDER_NAME,
//   },

//   // MONGODB
//   MONGODB: {
//     URI: process.env.MONGODB_URI,
//     DB_NAME: process.env.MONGODB_DB_NAME,
//     USER: process.env.MONGODB_USER,
//     PASSWORD: process.env.MONGODB_PASSWORD,
//     PORT: process.env.MONGODB_PORT,
//     HOST: process.env.MONGODB_HOST,
//   },

//   // JWT
//   JWT: {
//     SECRET_KEY: process.env.JWT_SECRET_KEY,
//     SECRET_EXPIRES: process.env.JWT_SECRET_EXPIRES,
//     REFRESH_SECRET_KEY: process.env.JWT_REFRESH_SECRET_KEY,
//     REFRESH_SECRET_EXPIRES: process.env.JWT_REFRESH_SECRET_EXPIRES,
//   },

//   // PASSPORT
//   PASSPORT: {
//     SESSION_SECRET: process.env.PASSPORT_SESSION_SECRET,
//     URL_REDIRECT_SUCCESS: process.env.PASSPORT_REDIRECT_SUCCESS,
//     URL_REDIRECT_FAILED: process.env.PASSPORT_REDIRECT_FAILED,
//     // GOOGLE
//     GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
//     GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
//     GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
//     // GITHUB
//     GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
//     GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
//     GITHUB_CALLBACK_URL: process.env.GITHUB_CALLBACK_URL,
//   },

//   // PORT
//   PORT: {
//     SERVER: process.env.PORT_SERVER,
//   },

//   // REDIS
//   REDIS: {
//     HOST: process.env.REDIS_HOST,
//     PORT: process.env.REDIS_PORT,
//     PASSWORD: process.env.REDIS_PASSWORD,
//     DB: process.env.REDIS_DB,
//   },

//   // EMAIL
//   EMAIL: {
//     USER: process.env.EMAIL_USER,
//     PASSWORD: process.env.EMAIL_PASSWORD,
//   },

//   // URL
//   URL: {
//     URL_WEBSITE: process.env.URL_WEBSITE,
//   },

//   // FOLDER
//   FOLDER: {
//     FOLDER_CLIENT: process.env.FOLDER_CLIENT,
//   },

//   // NODE_ENV
//   NODE_ENV: process.env.NODE_ENV,
// }

// export default ENV_CONFIG
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// fix __dirname cho ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// load đúng file server/.env
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

const ENV_CONFIG = {
  CLOUDINARY: {
    CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    API_KEY: process.env.CLOUDINARY_API_KEY,
    API_SECRET: process.env.CLOUDINARY_API_SECRET,
    PRESET: process.env.CLOUDINARY_PRESET,
    FOLDER_NAME: process.env.CLOUDINARY_FOLDER_NAME,
  },

  MONGODB: {
    URI: process.env.MONGODB_URI,
    DB_NAME: process.env.MONGODB_DB_NAME,
  },

  JWT: {
    SECRET_KEY: process.env.JWT_SECRET_KEY,
    SECRET_EXPIRES: process.env.JWT_SECRET_EXPIRES,
    REFRESH_SECRET_KEY: process.env.JWT_REFRESH_SECRET_KEY,
    REFRESH_SECRET_EXPIRES: process.env.JWT_REFRESH_SECRET_EXPIRES,
  },

  PASSPORT: {
    SESSION_SECRET: process.env.PASSPORT_SESSION_SECRET,

    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,

    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GITHUB_CALLBACK_URL: process.env.GITHUB_CALLBACK_URL,
  },

  PORT: {
    SERVER: process.env.PORT_SERVER || 4000,
  },

  URL: {
    URL_WEBSITE: process.env.URL_WEBSITE || 'http://localhost:5173',
  },

  NODE_ENV: process.env.NODE_ENV || 'development',
}

export default ENV_CONFIG
