import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PaginaIncial from "./Pages/Pagina-Inicial/Pagina-Inicial.jsx"
import PaginaAcomodacoes from './Pages/Pagina-Acomodações/Pagina-acomodações.jsx'


function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaIncial/>}></Route>  
        <Route path='/Acomodacoes' element={<PaginaAcomodacoes/>}></Route>
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
