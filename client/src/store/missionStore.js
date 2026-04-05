import { create } from 'zustand'

const useMissionStore = create((set) => ({
  missions: [],
  currentMission: null,
  setMissions: (missions) => set({ missions }),
  setCurrentMission: (mission) => set({ currentMission: mission }),
}))

export default useMissionStore
