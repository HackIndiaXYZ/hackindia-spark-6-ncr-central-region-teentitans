import apiClient from './client'

export const getMyGuild = () => apiClient.get('/guild/mine')
export const getGuildMembers = (id) => apiClient.get(`/guild/${id}/members`)
export const createGuild = (data) => apiClient.post('/guild/create', data)
