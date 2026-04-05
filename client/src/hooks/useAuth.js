import useAuthStore from '../store/authStore'
import { verifyOtp, sendOtp } from '../api/auth'

export default function useAuth() {
  const { user, token, setAuth, logout } = useAuthStore()

  const login = async (phone, code) => {
    const res = await verifyOtp(phone, code)
    setAuth(res.data.user, res.data.token)
    return res.data
  }

  return { user, token, login, logout, isLoggedIn: !!token }
}
