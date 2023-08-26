// import './styles/form.css' // REVISAR PORQUE NO SE IMPORTA
const Login = () => {
  return (
    <>
      <form className='form-sigin'>
        <h1 className='h3 mb-3 font-weight-normal'>Login</h1>
        <p>Welcome Back!</p>
        <label htmlFor='inputEmail' className='sr-only'>Email address</label>
        <input type='email' id='inputEmail' className='form-control' placeholder='email@example.com' required autoFocus />
        <label htmlFor='inputPassword' className='sr-only'>Password</label>
        <input type='password' id='inputPassword' className='form-control' placeholder='Password' required />
        <button className='btn btn-lg btn-primary btn-block' type='submit'>Login</button>
      </form>
    </>

  )
}

export default Login
