import { useState, useEffect } from 'react' // Importarlos para poder utilizarlos para llamar a la API
const Home = () => {
  const [products, setProducts] = useState([]) // Donde se va almacenar los datos de la API
  useEffect(() => { // Llamada a la API
    fetch('https://ecommerce-json-jwt.onrender.com/items')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error))
  }, [])
  return (
    <>
      <div className='container'>
        <h2>Products</h2>
        <div className='row'>
          {
          products.map(product => ( // Mostrar Todos los Productos Disponibles
            <div className='col-4' key={product.id}>
              <div className='card'>
                <div className='card-body'>
                  <img className='card-img-top' alt={`${product.product_name} image.`} src={product?.image} />
                  <h5 className='card-title'>{product.product_name}</h5>
                  <p className='card-text'>{product.brand}</p>
                  <h6 className='card-title'>$ {product.price}.00</h6>
                  <a href='#' className='btn btn-primary'>Add to cart</a>
                </div>
              </div>
            </div>
          ))
        }
        </div>

      </div>

    </>
  )
}

export default Home
