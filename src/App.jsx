import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PaginaIncial from "./Pages/Pagina-Inicial/Pagina-Inicial.jsx"


function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaIncial/>}></Route>  
      
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
