import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import GuildDashboard from './pages/GuildDashboard'
import MissionList from './pages/MissionList'
import MissionPlayer from './pages/MissionPlayer'
import Leaderboard from './pages/Leaderboard'
import BusinessTools from './pages/BusinessTools'
import LoanReadiness from './pages/LoanReadiness'
import FacilitatorDashboard from './pages/FacilitatorDashboard'
import NGODashboard from './pages/NGODashboard'
import Profile from './pages/Profile'
import CatalogBuilder from './pages/CatalogBuilder'
import MarketLinkage from './pages/MarketLinkage'
import Onboarding from './pages/Onboarding'
import BaselineAssessment from './pages/BaselineAssessment'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><GuildDashboard /></ProtectedRoute>} />
        <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
        <Route path="/assessment" element={<ProtectedRoute><BaselineAssessment /></ProtectedRoute>} />
        <Route path="/missions" element={<ProtectedRoute><MissionList /></ProtectedRoute>} />
        <Route path="/missions/:id" element={<ProtectedRoute><MissionPlayer /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
        <Route path="/tools" element={<ProtectedRoute><BusinessTools /></ProtectedRoute>} />
        <Route path="/tools/loan" element={<ProtectedRoute><LoanReadiness /></ProtectedRoute>} />
        <Route path="/catalog" element={<ProtectedRoute><CatalogBuilder /></ProtectedRoute>} />
        <Route path="/market" element={<ProtectedRoute><MarketLinkage /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/facilitator" element={<ProtectedRoute roles={['facilitator']}><FacilitatorDashboard /></ProtectedRoute>} />
        <Route path="/ngo" element={<ProtectedRoute roles={['ngo', 'admin']}><NGODashboard /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
