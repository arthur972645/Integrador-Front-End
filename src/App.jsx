import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PaginaLoginDashebord from './Pages/Pagina-Login-Dashebord/Pagin-Login-Dashebord.jsx'
import PaginaInicialDashebord from "./Pages/Pagina-Inicial-Dashebord/Pagian-Incial-Dashebord.jsx";
function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaLoginDashebord/>}></Route>
        <Route path='/dashebord' element={<PaginaInicialDashebord/>}></Route>
      
      </Routes>
    </BrowserRouter>
  )
} 

export default App
