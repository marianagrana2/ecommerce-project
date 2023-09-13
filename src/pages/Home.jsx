import { useState, useEffect } from 'react' // Importarlos para poder utilizarlos para llamar a la API
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Home = () => {
  const [products, setProducts] = useState([]) // Donde se va almacenar los datos de la API
  const [search, setSearch] = useState('')
  const { addToCart } = useCart()
  const handleAddToCart = (product) => {
    addToCart(product)
  }

  useEffect(() => { // Llamada a la API
    fetch('https://ecommerce-json-jwt.onrender.com/items')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error))
  }, [])
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  const filteredProducts = products.filter(product => {
    return product.product_name.toLowerCase().includes(search.toLocaleLowerCase())
  })
  return (
    <>
      <div className='position-relative overflow-hidden'>
        <div className='col-md-5 p-lg-5 mx-auto my-5'>
          <img
            className='img-fluid rounded float-left'
            alt='girl shopping from his cellphone.'
            src='./src/assets/StuckatHomeShopping.png'
          />
          <h1 className='display-4 font-weight-normal'>KlickMarket</h1>
          <p
            className='lead font-weight-normal'
          >Your new <strong>favorite</strong> online store.
          </p>
        </div>
      </div>
      <div className='container'>
        <h2 className='text-center fs-2'>Products</h2>
        <form className='form-inline my-2 my-md-0'>
          <input
            className='form-control'
            type='text'
            placeholder='Search'
            value={search}
            onChange={handleSearch}
          />
        </form>
        <div className='row'>
          {filteredProducts.map(product => ( // Mostrar Todos los Productos Disponibles
            <div className='col-4' key={product.id}>
              <div className='card mb-4 rounded-3 shadow-sm'>
                <div className='card-body'>
                  <img
                    className='card-img-top img-thumbnail'
                    alt={`${product.product_name} image.`}
                    src={product?.image}
                  />
                  <Link
                    className='card-link'
                    to={`/product/${product.id}`}
                  >{product.product_name}
                  </Link>
                  <p className='card-text'>{product.brand}</p>
                  <h6 className='card-title'>$ {product.price}.00</h6>
                  <Link
                    className='btn btn-outline-primary'
                    onClick={() => handleAddToCart(product)}
                    to='/cart'
                  > + Add to cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Home
