import { motion } from "framer-motion";
import ReservaDashebord from "../../Components/ReservaDashebord/ResrevaDashebord";
import Navbar from "../../Components/NavbarDashebord/NavbarDashebord.jsx";
import FinancieroDashebord from "../../Components/FinanceiroDashebord/FinanceiroDashebord.jsx";
import FinanceiroGrafico from "../../Components/FinanceiroGrafico/FinanceiroGrafico.jsx";
import Financeiro from "../../Components/FinanceiroDashebord/FinanceiroDashebord.jsx";

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
      <FinancieroDashebord />
      <FinanceiroGrafico/>
    </motion.div>
  );
};

export default PaginaInicialDashebord;
