import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PaginaLogin from "./Dashebord/Pages/Pagina_login/Pagina_login.jsx"
/// teste
function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaLogin/>}></Route>
      
      </Routes>
    </BrowserRouter>
  )
} //aeerton

export default App
