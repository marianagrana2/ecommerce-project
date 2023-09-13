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
    <div className='signup'>
      <div className='container'>
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
      </div>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill=' #DCE5F7' fillOpacity='1' d='M0,160L80,165.3C160,171,320,181,480,202.7C640,224,800,256,960,234.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z' /></svg>
    </div>
  )
}

export default Signup
