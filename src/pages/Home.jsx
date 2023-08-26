const Home = () => {
  return (
    <>
      <h2>Products</h2>
      <div className='cardsContainer'>
        <div className='card'>
          <img className='card-img-top' alt='Card image cap' />
          <div className='card-body'>
            <h5 className='card-title'>Card Title</h5>
            <p className='card-text'>Some description product right here.To have some content.</p>
            <a href='#' className='btn btn-primary'>Add to Cart</a>
          </div>

        </div>
        <div className='card'>
          <img className='card-img-top' alt='Card image cap' />
          <div className='card-body'>
            <h5 className='card-title'>Card Title</h5>
            <p className='card-text'>Some description product right here.To have some content.</p>
            <a href='#' className='btn btn-primary'>Add to Cart</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
