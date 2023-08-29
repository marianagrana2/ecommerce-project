import NavBar from './components/navbar/NavBar'
import './styles/App.css' // REVISAR PORQUE NO SE IMPORTA
import RoutesIndex from './routes'
import { BrowserRouter } from 'react-router-dom'
import { AdminProvider } from './context/AdminContext'
function App () {
  return (
    <>
      <AdminProvider>
        <BrowserRouter>
          <NavBar />
          <RoutesIndex />
        </BrowserRouter>
      </AdminProvider>
    </>
  )
}

export default App
