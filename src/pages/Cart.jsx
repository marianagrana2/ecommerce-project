import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart, removeFromCart } = useCart()
  const totalPrice = cart.reduce((total, product) => total + product.price, 0)
  return (
    <div className='cart'>
      <main className='container'>
        <div className='col-md-4 order-md-2 mb-4'>
          <h4 className='d-flex justify-content-between align-items-center mb-3'>
            <span className='text-muted'>Cart</span>
          </h4>
          <NavLink type='button' className='btn btn-link' to='/'>
            Back
          </NavLink>
          <ul className='list-group mb-3'>
            {cart.map((product) => (
              <li key={product.id} className='list-group-item d-flex justify-content-between lh-condensed'>
                <h6 className='my-0'>{product.product_name}</h6>
                <span className='text-muted'>${product.price}.00 </span>
                <button
                  className='btn btn-danger btn-sm ml-2'
                  onClick={() => removeFromCart(product.id)}
                >
                  Delete
                </button>
              </li>
            ))}
            <li className='list-group-item d-flex justify-content-between'>
              <span className='text-success'>Total:</span>
              <span className='text-success'>${totalPrice.toFixed(2)}</span>
            </li>
          </ul>
        </div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill=' #DCE5F7' fillOpacity='1' d='M0,160L80,165.3C160,171,320,181,480,202.7C640,224,800,256,960,234.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z' /></svg>
      </main>
    </div>
  )
}
export default Cart
