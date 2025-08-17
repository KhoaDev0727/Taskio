import { useForm } from 'react-hook-form'
import { login as loginUser } from './api'  // Import hàm login, rename để tránh conflict
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const onSubmit = async (data: any) => {
    const res = await loginUser(data.email, data.password)  // Dùng hàm từ api.ts
    localStorage.setItem('access_token', res.accessToken)
    localStorage.setItem('refresh_token', res.refreshToken)
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