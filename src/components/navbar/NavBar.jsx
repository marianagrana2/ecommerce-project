import { NavLink } from 'react-router-dom'
import { useAdminContext } from '../../hooks/useAdmin'
import { useLoginContext } from '../../hooks/useLogin'
import './navbar.scss'

const NavBar = () => {
  const { isAdmin } = useAdminContext()
  const { isLoggedIn, logout, username } = useLoginContext()

  const linkIsActive = (isActive) => {
    return isActive ? 'navbar__itemLink navbar__itemLink--isActive' : 'navbar__itemLink'
  }
  return (
    <nav className='navbar  sticky-top navbar-expand-lg rounded'>
      <NavLink to='/' className='navbar__logo'>KlickMarket</NavLink>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarsExample09'
        aria-controls='navbarsExample09'
        aria-expanded='true'
        aria-label='Toggle navigation'
      >
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
          {
            isAdmin && (
              <li className='nav-item'>
                <NavLink
                  to='/dashboard'
                  className={({ isActive }) => linkIsActive(isActive)}
                >Dashboard
                </NavLink>
              </li>
            )
}
          <li className='nav-item'>
            <NavLink
              to='/signup'
              className={({ isActive }) => linkIsActive(isActive)}
            >Sign up
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className='nav-item'>
              <span className='navbar__username'>{username}</span>
              <NavLink
                to='/'
                onClick={logout}
                className={({ isActive }) => linkIsActive(isActive)}
              >Log out
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
