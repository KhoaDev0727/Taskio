import http from '@/lib/http'
export const listProjects = () => http.get('/api/v1/projects').then(r => r.data)