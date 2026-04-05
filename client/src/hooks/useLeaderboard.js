import { useState, useEffect } from 'react'
import { getGuildLeaderboard } from '../api/leaderboard'

export default function useLeaderboard() {
  const [leaderboard, setLeaderboard] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getGuildLeaderboard()
      .then((res) => setLeaderboard(res.data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return { leaderboard, loading }
}
