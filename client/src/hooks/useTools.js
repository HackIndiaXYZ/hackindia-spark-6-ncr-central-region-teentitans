import useToolsStore from '../store/toolsStore'
import { getLoanScore, logIncome } from '../api/tools'

export default function useTools() {
  const { incomeLog, loanScore, addIncomeEntry, setLoanScore } = useToolsStore()

  const fetchLoanScore = async () => {
    const res = await getLoanScore()
    setLoanScore(res.data.score)
    return res.data.score
  }

  const addIncome = async (entry) => {
    const res = await logIncome(entry)
    addIncomeEntry(res.data)
    return res.data
  }

  return { incomeLog, loanScore, fetchLoanScore, addIncome }
}
