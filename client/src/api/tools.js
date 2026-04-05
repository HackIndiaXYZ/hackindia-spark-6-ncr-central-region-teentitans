import apiClient from './client'

export const calculatePrice = (data) => apiClient.post('/tools/pricing', data)
export const logIncome = (data) => apiClient.post('/tools/cashbook', data)
export const getIncomeLog = () => apiClient.get('/tools/cashbook')
export const getLoanScore = () => apiClient.get('/loan/score')
export const exportLoanScore = () => apiClient.post('/loan/export')
