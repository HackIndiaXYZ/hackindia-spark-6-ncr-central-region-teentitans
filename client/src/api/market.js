import apiClient from './client'

export const checkMarketUnlocks = () => apiClient.get('/market/unlock')
export const listOnMeesho = (data) => apiClient.post('/market/meesho/list', data)
export const registerOnOndc = (data) => apiClient.post('/market/ondc/register', data)
