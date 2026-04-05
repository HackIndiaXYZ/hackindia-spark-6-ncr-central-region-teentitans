import dotenv from 'dotenv'
dotenv.config()

export const ENV = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL,
  REDIS_URL: process.env.REDIS_URL,
  JWT_SECRET: process.env.JWT_SECRET || 'dev_secret_change_in_prod',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  OTP_MODE: process.env.OTP_MODE || 'mock',
  FAST2SMS_API_KEY: process.env.FAST2SMS_API_KEY,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
  AWS_REGION: process.env.AWS_REGION || 'ap-south-1',
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_WHATSAPP_FROM: process.env.TWILIO_WHATSAPP_FROM,
  MEESHO_PARTNER_API_KEY: process.env.MEESHO_PARTNER_API_KEY,
}
