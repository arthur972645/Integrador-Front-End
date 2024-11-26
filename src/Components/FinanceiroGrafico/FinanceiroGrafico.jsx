import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js'; 
import TextoInformativo from "../../Components/TextoInformativo/TextoInformativo.jsx";
import BuscarValorTotal from "../BuscaValorTotalDashebord/BuscaValorTotalDashebord.jsx";


ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const SessaoReservas = styled.section`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 2rem;
  @media (max-width: 768px) {
    height: 50vh;
    padding-top: 1rem; 
  }
  @media (max-width: 480px) {
    height: 45vh; 
  }
  @media (max-width: 1024px) {
    height: 65vh;
  }
`;

const BoxReservas = styled.div`
  height: 100%;
  width: 60%;
  border-radius: 20px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  @media (max-width: 768px) {
    width: 100%; 
    padding: 20px; 
    height: auto;
  }
  @media (max-width: 480px) {
    width: 90%;
    padding: 15px; 
    height: auto;
  }
  @media (max-width: 1024px) {
    width: 95%;
    padding: 15px; 
    height: auto;
  }
`;

const Reservas = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background-color: #F6F8FA;
  overflow-y: auto;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 15px; 
  }
  @media (max-width: 480px) {
    padding: 10px; 
  }
  @media (max-width: 1024px) {
    padding-top: 10px;
  }
`;

const Filtros = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  gap: 0.75rem; 
`;

const SessaoGraficoLinhha = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%; 
  margin: auto;
`;

const FinanceiroGrafico = () => {
  const [resultados, setResultados] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [buscou, setBuscou] = useState(false); 
  const [monthlyResults, setMonthlyResults] = useState({});

  
  useEffect(() => {
    if (buscou) {
      const prepareGraphData = () => {
        const meses = Object.keys(monthlyResults);  
        const valores = meses.map(mes => monthlyResults[mes]?.valortotal || 0); 

        return {
          labels: meses, 
          datasets: [
            {
              label: 'Faturamento por Mês',
              data: valores,
              fill: false,
              borderColor: '#7d2626a4',
              tension: 0.1,
            },
          ],
        };
      };

      setGraphData(prepareGraphData());
    }
  }, [buscou, monthlyResults]);

  const [graphData, setGraphData] = useState(null);

  
  const handleResultado = (monthlyResults) => {
    setMonthlyResults(monthlyResults);
  };

  return (
    <>
      <TextoInformativo Informacao="Faturamento Mensal" />
      <SessaoReservas>
        <BoxReservas>
          <Reservas>
            <Filtros>
              <BuscarValorTotal
                setLoading={setLoading}
                setResultados={setResultados}
                setBuscou={setBuscou}
                setValorTotal={(valor) => console.log(`Valor total: ${valor}`)} 
                handleResultado={handleResultado} 
              />
            </Filtros>
            {graphData ? (
              <SessaoGraficoLinhha>
                <Line data={graphData} options={{ responsive: true }} />
              </SessaoGraficoLinhha>
            ) : null}
              
            
          </Reservas>
        </BoxReservas>
      </SessaoReservas>
    </>
  );
};

export default FinanceiroGrafico;
