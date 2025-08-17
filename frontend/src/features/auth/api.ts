import http from '@/lib/http'

export const login = (email: string, password: string) =>
  http.post('/api/v1/auth/login', { email, password }).then(r => r.data)

export const register = (name: string, email: string, password: string, tenant: string) =>
  http.post('/api/v1/auth/register', { name, email, password, tenant }).then(r => r.data)