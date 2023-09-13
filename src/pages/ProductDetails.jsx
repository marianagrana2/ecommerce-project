import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState('')
  useEffect(() => {
    fetch(`https://ecommerce-json-jwt.onrender.com/items/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error(error))
  }, [id])
  return (
    <div className='container mt-3'>
      <div className='card'>
        <div className='card-header'>
          <h3>{product.product_name}</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <img
              className='card-img-top img-thumbnail'
              alt={`${product.product_name} image.`}
              src={product?.image}
            />
          </div>
          <div className='col-md-8'>
            <h5>Description:</h5>
            <p className='text-secondary'>{product.description}</p>
            <h6>Category: {product.category} </h6>
            <h6>Brand: {product.brand} </h6>
            <h5>$ {product.price}.00</h5>
            <a href='/' className='btn btn-outline-primary'> Back </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails
