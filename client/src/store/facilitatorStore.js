import { create } from 'zustand'

const useFacilitatorStore = create((set) => ({
  guilds: [],
  selectedGuild: null,
  setGuilds: (guilds) => set({ guilds }),
  setSelectedGuild: (guild) => set({ selectedGuild: guild }),
}))

export default useFacilitatorStore
