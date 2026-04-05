import { useEffect } from 'react'
import useMissionStore from '../store/missionStore'
import { getMissions } from '../api/missions'

export default function useMissions(level = 1) {
  const { missions, setMissions } = useMissionStore()

  useEffect(() => {
    getMissions(level).then((res) => setMissions(res.data)).catch(() => {})
  }, [level])

  return { missions }
}
