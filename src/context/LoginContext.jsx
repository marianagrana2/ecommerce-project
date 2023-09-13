import { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

const LoginContext = createContext()

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('jwt_token')
    if (token) {
      setIsLoggedIn(true)
      const decodedToken = jwtDecode(token)
      setUsername(decodedToken.username)
    }
  }, [])

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    localStorage.removeItem('jwt_token')
    setIsLoggedIn(false)
  }
  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout, username }}>
      {children}
    </LoginContext.Provider>
  )
}

export {
  LoginContext,
  LoginProvider
}
