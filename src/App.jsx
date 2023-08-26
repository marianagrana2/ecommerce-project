import NavBar from './components/navbar/NavBar'
import './styles/App.css' // REVISAR PORQUE NO SE IMPORTA
import RoutesIndex from './routes'
import { BrowserRouter } from 'react-router-dom'
function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RoutesIndex />
      </BrowserRouter>

    </>
  )
}

export default App
