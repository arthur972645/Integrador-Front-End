import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PaginaLoginDashebord from './Pages/Pagina-Login-Dashebord/Pagin-Login-Dashebord.jsx'
import PaginaInicialDashebord from "./Pages/Pagina-Inicial-Dashebord/Pagian-Incial-Dashebord.jsx";
/// teste
function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaLoginDashebord/>}></Route>
        <Route path='/Home' element={<PaginaInicialDashebord/>}></Route>
      
      </Routes>
    </BrowserRouter>
  )
} 

export default App
