import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext)
}

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId)
    setCart(updatedCart)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export {
  CartContext,
  CartProvider
}
