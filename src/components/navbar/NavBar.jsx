import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
const NavBar = () => {
  const [search, setSearch] = useState('')
  const linkIsActive = (isActive) => {
    return isActive ? 'navbar__itemLink navbar__itemLink--isActive' : 'navbar__itemLink'
  }
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  return (
    <nav className='navbar  sticky-top navbar-expand-lg navbar-light bg-light rounded'>
      <NavLink to='/' className='navbar__logo'>KlickMarket</NavLink>
      <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarsExample09' aria-controls='navbarsExample09' aria-expanded='true' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='navbar-collapse collapse' id='navbarsExample09'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink to='/' className={({ isActive }) => linkIsActive(isActive)}>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/login' className={({ isActive }) => linkIsActive(isActive)}>Log in</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/signup' className={({ isActive }) => linkIsActive(isActive)}>Sign up</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/' className={({ isActive }) => linkIsActive(isActive)}>Log out</NavLink>
          </li>
        </ul>
        <form className='form-inline my-2 my-md-0'>
          <input className='form-control' type='text' placeholder='Search' aria-label='Search' value={search} onChange={handleSearch} />
        </form>
      </div>
    </nav>
  )
}

export default NavBar
