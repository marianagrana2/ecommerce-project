import { useForm } from 'react-hook-form'
import axios from 'axios'
import { registerUserService } from '../services/userService'

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const sendData = async (data) => {
    try {
      const response = await registerUserService(data)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <main className='container'>
      <form onSubmit={handleSubmit(sendData)} className='form-sigin'>
        <h1 className='h3 mb-3 font-weight-normal'>Signup</h1>
        <h5 className='h5 mb-3 font-weight-normal'>Welcome! Please sign up.</h5>
        <label htmlFor='inputFirstName' className='sr-only'>First Name</label>
        <input
          type='text'
          id='inputFirstName'
          className='form-control'
          placeholder='First Name'
          {...register('first_name')}
          required
        />
        <label htmlFor='inputLastName' className='sr-only'>Last Name</label>
        <input
          type='text'
          id='inputLastName'
          className='form-control'
          placeholder='Last Name'
          {...register('last_name')}
        />
        <label>Gender</label>
        <select
          id='inputGender'
          className='form-select'
          {...register('gender')}
        >
          <option value=''>Choose...</option>
          <option value='F'>Female</option>
          <option value='M'>Male</option>
          <option value='O'>Other</option>
        </select>
        <label htmlFor='inputEmail' className='sr-only'>Email address</label>
        <input
          type='email'
          id='inputEmail'
          className='form-control'
          placeholder='email@example.com'
          {...register('email')}
          required
        />
        <label htmlFor='inputPassword' className='sr-only'>Password</label>
        <input
          type='password'
          id='inputPassword'
          className='form-control'
          placeholder='Password'
          {...register('password')}
          required
        />
        <button className='btn btn-lg btn-outline-primary btn-block' type='submit'>Sign up</button>
      </form>
    </main>
  )
}

export default Signup
