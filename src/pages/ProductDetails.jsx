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
            <img alt={`${product.product_name} image.`} src={product?.image} />
          </div>
          <div className='col-md-8'>
            <p className='text-secondary'>Description: {product.description}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails
