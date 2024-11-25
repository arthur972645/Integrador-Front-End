import React, { useState } from 'react';
import styled from 'styled-components';
import BuscaGraficoAcomodacao from '../BuscarAcomodacaoDashebord/BuscarAcomodacaoDashebord.jsx';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
const SessaoFinanceiroLucroGraficoSetores = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    height: auto;
    padding-top: 1rem;
    align-items: center;
   justify-content: center;
  
  }
  @media (max-width: 480px) {
    height: auto;
    padding-top: 1rem;
    align-items: center;
   justify-content: center;
  
  }
  @media (max-width: 1024px) {
    height: auto;
    padding-top: 1rem;
    align-items: center;
   justify-content: center;
  }
  
`;

const BoxFinanceiroLucroGraficoSetores = styled.div`
  height: 100%;
  width: 60%;
  border-radius: 20px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 10px;
    align-items: center;
    justify-content: center;
  
  }
  @media (max-width: 480px) {
    width: 90%;
    height: auto;
    padding: 10px;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    width: 70%;
    height: auto;
    padding: 10px;
    align-items: center;
    justify-content: center;;
  }
`;

const GraficoSetores = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background-color: #F6F8FA;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
    align-items: center;
  justify-content: center;
  
  }
  @media (max-width: 480px) {
    padding: 15px;
    align-items: center;
  justify-content: center;
  }
  @media (max-width: 1024px) {
    padding: 15px;
    align-items: center;
  justify-content: center;
  }
  
`;

const EstilizacaoGrafico = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 100%; 
  margin: auto;
  
  @media (max-width: 768px) {
    height: 30vh;
  }
  @media (max-width: 480px) {
    height: 30vh;
  }
  @media (max-width: 1024px) {
    height: 30vh;
  }
`;



const GraficoPorSetores = () => {
  const [loading, setLoading] = useState(false);
  const [graficoData, setGraficoData] = useState(null);

  return (
    <SessaoFinanceiroLucroGraficoSetores>
      <BoxFinanceiroLucroGraficoSetores>
        <GraficoSetores>
          {loading && <p>Carregando...</p>}
          <BuscaGraficoAcomodacao
            setGraficoData={setGraficoData}
            setLoading={setLoading}
          />
          {graficoData && (
            <EstilizacaoGrafico>
              <Doughnut data={graficoData} />
            </EstilizacaoGrafico>
          )}
        </GraficoSetores>
      </BoxFinanceiroLucroGraficoSetores>
    </SessaoFinanceiroLucroGraficoSetores>
  );
};

export default GraficoPorSetores;
