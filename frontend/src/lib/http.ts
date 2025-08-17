import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL || '/api'
const http = axios.create({ baseURL })

http.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

http.interceptors.response.use(
  res => res,
  async err => {
    const original = err.config
    if (err.response?.status === 401 && !original._retry) {
      original._retry = true
      try {
        const refreshToken = localStorage.getItem('refresh_token')
        const res = await axios.post(`${baseURL}/api/v1/auth/refresh`, { refreshToken })  // Thêm /api/v1/
        localStorage.setItem('access_token', res.data.accessToken)
        localStorage.setItem('refresh_token', res.data.refreshToken)
        original.headers.Authorization = `Bearer ${res.data.accessToken}`
        return axios(original)
      } catch (e) {
        localStorage.clear()
        window.location.href = '/login'
        return Promise.reject(e)
      }
    }
    return Promise.reject(err)
  }
)

export default http
