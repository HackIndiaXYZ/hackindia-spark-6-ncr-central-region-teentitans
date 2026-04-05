import { useEffect } from 'react'
import useGuildStore from '../store/guildStore'
import { getMyGuild } from '../api/guild'

export default function useGuild() {
  const { guild, members, setGuild, setMembers } = useGuildStore()

  useEffect(() => {
    if (!guild) {
      getMyGuild().then((res) => {
        setGuild(res.data.guild)
        setMembers(res.data.members)
      }).catch(() => {})
    }
  }, [])

  return { guild, members }
}
