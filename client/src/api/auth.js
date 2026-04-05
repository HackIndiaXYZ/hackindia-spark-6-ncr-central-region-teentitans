import apiClient from './client'

export const sendOtp = (phone) => apiClient.post('/auth/send-otp', { phone })
export const verifyOtp = (phone, code) => apiClient.post('/auth/verify-otp', { phone, code })
export const refreshToken = () => apiClient.post('/auth/refresh')
