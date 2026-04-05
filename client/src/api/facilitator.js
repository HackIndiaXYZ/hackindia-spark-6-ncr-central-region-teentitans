import apiClient from './client'

export const getHeatmap = () => apiClient.get('/facilitator/heatmap')
export const sendNudge = (data) => apiClient.post('/facilitator/nudge', data)
export const toggleMeetingMode = (guildId, active) => apiClient.post('/facilitator/meeting-mode', { guildId, active })
