import { useCallback } from 'react'

export function useAuth() {
  const login = useCallback((token: string) => {
    localStorage.setItem('access_token', token)
  }, [])
  const logout = useCallback(() => {
    localStorage.removeItem('access_token')
    window.location.href = '/login'
  }, [])
  const isAuthenticated = !!localStorage.getItem('access_token')
  return { login, logout, isAuthenticated }
}