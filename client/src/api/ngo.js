import apiClient from './client'

export const getClusterStats = () => apiClient.get('/ngo/cluster-stats')
export const getSkillGaps = () => apiClient.get('/ngo/skill-gaps')
export const getIncomeTrend = () => apiClient.get('/ngo/income-trend')
