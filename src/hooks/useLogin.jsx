import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext.jsx'

export const useLoginContext = () => {
  const context = useContext(LoginContext)

  if (context === undefined) {
    throw new Error('useLogin debe ser usado dentro de LoginProvider')
  }

  return context
}
