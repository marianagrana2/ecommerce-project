import NavBar from './components/navbar/NavBar'
import RoutesIndex from './routes'
import { BrowserRouter } from 'react-router-dom'
import { AdminProvider } from './context/AdminContext'
import { LoginProvider } from './context/LoginContext'
import { CartProvider } from './context/CartContext'
import './App.css'
function App () {
  return (
    <>
      <CartProvider>
        <LoginProvider>
          <AdminProvider>
            <BrowserRouter>
              <NavBar />
              <RoutesIndex />
            </BrowserRouter>
          </AdminProvider>
        </LoginProvider>
      </CartProvider>
    </>
  )
}

export default App
