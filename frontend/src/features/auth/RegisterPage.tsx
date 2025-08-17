import { useForm } from 'react-hook-form'
import { register as registerUser } from './api'  // Import hàm register, rename để tránh conflict
import { useNavigate } from 'react-router-dom'

export default function RegisterPage() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const onSubmit = async (data: any) => {
    const res = await registerUser(data.name, data.email, data.password, data.tenant)  // Dùng hàm từ api.ts
    localStorage.setItem('access_token', res.accessToken)
    localStorage.setItem('refresh_token', res.refreshToken)
    navigate('/projects')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: '40px auto' }}>
      <h2>Register</h2>
      <input {...register('name')} placeholder="Name" />
      <input {...register('email')} placeholder="Email" />
      <input {...register('password')} type="password" placeholder="Password" />
      <input {...register('tenant')} placeholder="Tenant name" />
      <button type="submit">Register</button>
    </form>
  )
}