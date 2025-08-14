import { useForm } from 'react-hook-form'
import http from '@/lib/http'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data: any) => {
    const res = await http.post('/auth/login', data)
    localStorage.setItem('access_token', res.data.accessToken)
    localStorage.setItem('refresh_token', res.data.refreshToken)
    navigate('/projects')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: '40px auto' }}>
      <h2>Login</h2>
      <input {...register('email')} placeholder="Email" />
      <input {...register('password')} type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  )
}
