import apiClient from './client'

export const getMissions = (level) => apiClient.get(`/missions?level=${level}`)
export const getMissionById = (id) => apiClient.get(`/missions/${id}`)
export const completeMission = (id, answers) => apiClient.post(`/missions/${id}/complete`, { answers })
