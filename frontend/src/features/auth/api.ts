import http from '@/lib/http'
export const login = (email: string, password: string) =>
  http.post('/api/v1/auth/login', { email, password }).then(r => r.data)