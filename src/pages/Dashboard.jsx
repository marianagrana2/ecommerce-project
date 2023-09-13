const Dashboard = () => {
  return (
    <>
      <main className='container'>
        <h2>Dashboard</h2>
        <p>Welcome Admin!</p>
        <form className='form-sigin'>
          <h1 className='h3 mb-3 font-weight-normal'>New Product</h1>
          <label htmlFor='inputProductName' className='sr-only'>Product Name:</label>
          <input
            type='text'
            id='inputProductName'
            className='form-control'
            placeholder='Product Name'
          />
          <label htmlFor='inputBrand' className='sr-only'>Brand:</label>
          <input
            type='text'
            id='inputProductBrand'
            className='form-control'
            placeholder='Brand'
          />
          <label htmlFor='inputPrice' className='sr-only'>Price:</label>
          <input
            type='text'
            id='inputProductPrice'
            className='form-control'
            placeholder='Price'
          />
          <label htmlFor='inputDescription' className='sr-only'>Description:</label>
          <textarea
            id='inputProductDescription'
            className='form-control'
            rows='3'
          />
          <label htmlFor='inputCategory' className='sr-only'>Category:</label>
          <select className='form-select' aria-label='Default select example'>
            <option selected> Choose Category</option>
            <option value='Bo'>Books</option>
            <option value='Mo'>Movies</option>
            <option value='Mu'>Music</option>
            <option value='Ga'>Games</option>
            <option value='El'>Electronics</option>
            <option value='Co'>Computers</option>
            <option value='Ho'>Home</option>
            <option value='Ga'>Garden</option>
            <option value='To'>Tools</option>
            <option value='Gr'>Grocery</option>
            <option value='He'>Health</option>
            <option value='Be'>Beauty</option>
            <option value='To'>Toys</option>
            <option value='Ki'>Kids</option>
            <option value='Ba'>Baby</option>
            <option value='Cl'>Clothing</option>
            <option value='Sh'>Shoes</option>
            <option value='Je'>Jewelery</option>
            <option value='Sp'>Sports</option>
            <option value='Ou'>Outdoors</option>
            <option value='Au'>Automovile</option>
            <option value='In'>Industrial</option>
          </select>
          <label htmlFor='inputSku' className='sr-only'>Sku:</label>
          <input
            type='text'
            id='inputProductSku'
            className='form-control'
            placeholder='Sku'
          />
          <label htmlFor='formFile' className='form-label'>Image</label>
          <input className='form-control' type='file' id='formFile' />
          <button
            type='button'
            className='btn btn-lg btn-outline-primary btn-block'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >Submit
          </button>
        </form>
        <div className='modal' id='exampleModal' tabIndex='-1'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'> New Product</h5>
                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
              </div>
              <div className='modal-body'>
                <p>The product will be added to the catalog.</p>
                <small>! This is just a demostration, it won't actually add the product.</small>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                <button type='button' className='btn btn-primary'>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Dashboard
