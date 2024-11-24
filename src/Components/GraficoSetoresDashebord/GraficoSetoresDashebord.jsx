import React, { useState } from 'react';
import styled from 'styled-components';
import BuscaGraficoAcomodacao from '../BuscarAcomodacaoDashebord/BuscarAcomodacaoDashebord.jsx';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SessaoFinanceiroLucroGraficoSetores = styled.section`
  height: 60vh;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 2rem;
  padding-left: 1rem;
`;

const BoxFinanceiroLucroGraficoSetores = styled.div`
  height: 100%;
  width: 60%;
  border-radius: 20px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const GraficoSetores = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background-color: #F6F8FA;
  padding: 20px;
`;

const EstilizacaoGrafico = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  height: 40vh;
  width: 100%; 
  margin: 'auto'
`

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
