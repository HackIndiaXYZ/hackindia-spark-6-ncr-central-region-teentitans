import { create } from 'zustand'

const useToolsStore = create((set) => ({
  incomeLog: [],
  loanScore: null,
  addIncomeEntry: (entry) =>
    set((state) => ({ incomeLog: [...state.incomeLog, entry] })),
  setLoanScore: (score) => set({ loanScore: score }),
}))

export default useToolsStore
