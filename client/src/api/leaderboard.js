import apiClient from './client'

export const getGuildLeaderboard = () => apiClient.get('/leaderboard/guild')
export const getClusterLeaderboard = () => apiClient.get('/leaderboard/cluster')
