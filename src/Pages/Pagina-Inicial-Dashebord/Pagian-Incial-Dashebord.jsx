import { motion } from "framer-motion";
import ReservaDashebord from "../../Components/ReservaDashebord/ResrevaDashebord";
import Navbar from "../../Components/NavbarDashebord/NavbarDashebord.jsx";
import LucoMensal from "../../Components/LucroMensalFinanceiroDashebord/LucroMensalFinanceiroDashebord.jsx";

const PaginaInicialDashebord = () => {
  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <ReservaDashebord />
      <LucoMensal />
    </motion.div>
  );
};

export default PaginaInicialDashebord;
