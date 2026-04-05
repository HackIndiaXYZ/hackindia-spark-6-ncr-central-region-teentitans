import { create } from 'zustand'

const useGuildStore = create((set) => ({
  guild: null,
  members: [],
  setGuild: (guild) => set({ guild }),
  setMembers: (members) => set({ members }),
  clearGuild: () => set({ guild: null, members: [] }),
}))

export default useGuildStore
