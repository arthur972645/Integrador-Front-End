import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PaginaIncial from "./Pages/Pagina-Inicial/Pagina-Inicial.jsx"
import PaginaAcomodacoes from './Pages/Pagina-Acomodações/Pagina-acomodações.jsx'
import PaginaDomo from './Pages/Pagina-Dome/Pagina-Dome.jsx'
import PaginaContato from './Pages/Pagina-Contato/Pagina-Contato.jsx'
/// teste
function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaIncial/>}></Route>
        <Route path='/Contato' element={<PaginaContato/>}></Route>
        <Route path='/Acomodacoes' element={<PaginaAcomodacoes/>}></Route>
        <Route path='acomodacao/Domo' element={<PaginaDomo/>}></Route>
        <Route path='Domo' element={<PaginaDomo/>}></Route>
      </Routes>
    </BrowserRouter>
  )
} //aeerton

export default App
