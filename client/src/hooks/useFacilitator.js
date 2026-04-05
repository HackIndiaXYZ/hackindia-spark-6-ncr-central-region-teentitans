import { useState, useEffect } from 'react'
import useFacilitatorStore from '../store/facilitatorStore'
import { getHeatmap } from '../api/facilitator'

export default function useFacilitator() {
  const { guilds, setGuilds } = useFacilitatorStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getHeatmap()
      .then((res) => setGuilds(res.data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return { guilds, loading }
}
