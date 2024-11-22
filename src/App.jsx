import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaLoginDashebord from './Pages/Pagina-Login-Dashebord/Pagin-Login-Dashebord.jsx';
import PaginaInicialDashebord from "./Pages/Pagina-Inicial-Dashebord/Pagian-Incial-Dashebord.jsx";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<PaginaLoginDashebord />} />
          <Route path="/dashebord" element={<PaginaInicialDashebord />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
