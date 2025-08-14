import { createRoutesFromElements, Route } from 'react-router-dom'
import LoginPage from '@/features/auth/LoginPage'
import RegisterPage from '@/features/auth/RegisterPage'
import ProjectsPage from '@/features/projects/ProjectsPage'

export default createRoutesFromElements(
  <>
    <Route path="/login" element={<LoginPage />} />
	<Route path="/register" element={<RegisterPage />} />
    <Route path="/projects" element={<ProjectsPage />} />
  </>
)