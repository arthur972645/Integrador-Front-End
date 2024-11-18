import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PaginaLoginDashebord from './Pages/Pagina-Login-Dashebord/Pagin-Login-Dashebord.jsx'
import PaginaInicialDashebord from "./Pages/Pagina-Inicial-Dashebord/Pagian-Incial-Dashebord.jsx";
import PaginaReservaDashebord from './Pages/Pagina-Reserva-Dashebord/Pagina-Reserva-Dashebord.jsx';
/// teste
function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<PaginaLoginDashebord/>}></Route>
        <Route path='/Home' element={<PaginaInicialDashebord/>}></Route>
        <Route path='/Reserva' element={<PaginaReservaDashebord/>}></Route>
      
      </Routes>
    </BrowserRouter>
  )
} 

export default App
