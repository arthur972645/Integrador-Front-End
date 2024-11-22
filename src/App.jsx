import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import PaginaLoginDashebord from './Pages/Pagina-Login-Dashebord/Pagin-Login-Dashebord.jsx';
import PaginaInicialDashebord from "./Pages/Pagina-Inicial-Dashebord/Pagian-Incial-Dashebord.jsx";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation(); // Necessário para que as animações detectem as mudanças de rota.

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PaginaLoginDashebord />} />
        <Route path="/dashebord" element={<PaginaInicialDashebord />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
