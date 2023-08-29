import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Login from '../pages/login'
import ProductDetails from '../pages/ProductDetails'
import Signup from '../pages/Signup'
const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default RoutesIndex
