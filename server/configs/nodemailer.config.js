// import nodemailer from 'nodemailer'
// import ENV_CONFIG from './env.config.js'

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: ENV_CONFIG.EMAIL.USER,
//     pass: ENV_CONFIG.EMAIL.PASSWORD,
//   },
// })

// export default transporter
import nodemailer from 'nodemailer'
import ENV_CONFIG from './env.config.js'

let transporter = null

export function getMailer() {
  // ✅ Nếu chưa cấu hình email → không tạo transporter
  if (!ENV_CONFIG.EMAIL?.USER || !ENV_CONFIG.EMAIL?.PASSWORD) {
    console.log('Email service disabled')
    return null
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: ENV_CONFIG.EMAIL.USER,
        pass: ENV_CONFIG.EMAIL.PASSWORD,
      },
    })

    console.log('Email service enabled')
  }

  return transporter
}

export default getMailer
