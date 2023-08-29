import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUserService } from '@/services/userService'
import { useAdminContext } from '@/hooks/useAdmin'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAdminContext()
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const response = await loginUserService(data)
      const token = response.data.token
      localStorage.setItem('jwt_token', token)
      console.log(token)
      const admin = login(token)
      navigate(admin ? '/dashboard' : '/')
    } catch (error) {
      console.error(error)
    }
  }
  const handleSubmit = (error) => {
    error.preventDefault()
    sendData({ email, password })
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit} className='form-sigin'>
          <h1 className='h3 mb-3 font-weight-normal'>Login</h1>
          <h5 className='h5 mb-3 font-weight-normal'>Welcome Back!</h5>
          <label htmlFor='inputEmail' className='sr-only'>Email address</label>
          <input type='email' id='inputEmail' className='form-control' placeholder='email@example.com' onChange={(event) => setEmail(event.target.value)} required autoFocus />
          <label htmlFor='inputPassword' className='sr-only'>Password</label>
          <input type='password' id='inputPassword' className='form-control' placeholder='Password' onChange={(event) => setPassword(event.target.value)} required />
          <button className='btn btn-lg btn-outline-primary btn-block' type='submit'>Log in</button>
        </form>
      </div>
    </>

  )
}

export default Login
