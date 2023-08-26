const Signup = () => {
  return (
    <div className='container'>
      <form className='form-sigin'>
        <h1 className='h3 mb-3 font-weight-normal'>Signup</h1>
        <h5 className='h5 mb-3 font-weight-normal'>Welcome!</h5>
        <label htmlFor='inputFirstName' className='sr-only'>First Name</label>
        <input type='text' id='inputFirstName' className='form-control' placeholder='First Name' required />
        <label htmlFor='inputLastName' className='sr-only'>Last Name</label>
        <input type='text' id='inputLastName' className='form-control' placeholder='Last Name' required />
        <label>Genre</label>
        <select id='inputGenre' className='form-control'>
          <option selected>Choose...</option>
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>
        </select>
        <label htmlFor='inputEmail' className='sr-only'>Email address</label>
        <input type='email' id='inputEmail' className='form-control' placeholder='email@example.com' required />
        <label htmlFor='inputPassword' className='sr-only'>Password</label>
        <input type='password' id='inputPassword' className='form-control' placeholder='Password' required />
        <button className='btn btn-lg btn-outline-primary btn-block' type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default Signup
