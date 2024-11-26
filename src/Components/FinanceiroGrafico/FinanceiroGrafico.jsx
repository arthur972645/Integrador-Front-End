import React, { useState } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2'; // Importando o gráfico de linha
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js'; 
import TextoInformativo from "../../Components/TextoInformativo/TextoInformativo.jsx";
import BuscarFaturamentoSemestre from '../BuscaFaturamentoSemestre/BuscaFaturamentoSemestre.jsx';

// Registrando os componentes do Chart.js
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
    width: 80%; 
    padding: 20px; 
  }
  @media (max-width: 480px) {
    width: 90%;
    padding: 15px; 
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
`;

const Filtros = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Alinha os filtros à direita */
  gap: 0.75rem; /* Diminuindo o espaço entre os botões */
`;

const BotaoInput = styled.input`
  padding: 8px 12px; /* Diminuindo o padding */
  border-radius: 12px; /* Menos arredondado */
  border: 1px solid #ccc;
  font-size: 0.9rem; /* Diminuindo o tamanho da fonte */
  outline: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #75b3b3;
    box-shadow: 0 0 5px rgba(117, 179, 179, 0.5);
  }
`;

const BotaoSelect = styled.select`
  padding: 8px 12px; /* Diminuindo o padding */
  border-radius: 12px; /* Menos arredondado */
  border: 1px solid #ccc;
  font-size: 0.9rem; /* Diminuindo o tamanho da fonte */
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #75b3b3;
    box-shadow: 0 0 5px rgba(117, 179, 179, 0.5);
  }
`;

const BotaoBuscar = styled.button`
  height: 35px;
  width: 100px;
  padding: 8px;
  margin-right: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #7D2626;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a82f2f; /* Cor de fundo ao passar o mouse */
  }
`;


const ResultadoBusca = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 15px; 
  }
  @media (max-width: 480px) {
    padding: 10px; 
  }
`;

const SessaoGraficoLinhha = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%; 
  margin: auto;
`

const ReservaDashboard = () => {
  const [resultados, setResultados] = useState([]); // Para armazenar os resultados da busca
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const [buscou, setBuscou] = useState(false); // Indicador se a busca foi realizada

  // Estados para armazenar o ano e semestre selecionado
  const [ano, setAno] = useState(2024);
  const [semestre, setSemestre] = useState(1);

  // Função para lidar com a mudança no ano
  const handleAnoChange = (e) => {
    setAno(e.target.value);
  };

  // Função para lidar com a mudança no semestre
  const handleSemestreChange = (e) => {
    setSemestre(e.target.value);
  };

  // Função para filtrar os dados com base no semestre e ano selecionados
  const filtrarDadosPorSemestreEAnos = () => {
    const labels = semestre === 1 
      ? ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'] 
      : ['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']; // Alterando os meses conforme o semestre

    // Dados fictícios para o semestre selecionado
    const dataFaturamento = semestre === 1
      ? [65, 59, 80, 81, 56, 55]
      : [40, 45, 60, 70, 55, 50];

    const dataParaGrafico = {
      labels: labels, // Meses do semestre selecionado
      datasets: [{
        label: 'Faturamento',
        data: dataFaturamento,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    return dataParaGrafico; // Retornar os dados atualizados
  };

  // Configuração do gráfico
  const data = filtrarDadosPorSemestreEAnos();
  const config = {
    type: 'line',
    data: data,
  };

  // Função para buscar os dados
  const handleBuscar = () => {
    console.log("Busca realizada com o ano:", ano, "e semestre:", semestre);
    setBuscou(true); // Simulando que a busca foi realizada
  };

  return (
    <>
      <TextoInformativo Informacao="Faturamento Semestral" />
      <SessaoReservas>
        <BoxReservas>
          <Reservas>
         
            <Filtros>
            <BuscarFaturamentoSemestre/>
            
            </Filtros>

            <SessaoGraficoLinhha>
              <Line data={data} options={config} />
            </SessaoGraficoLinhha>
            
          </Reservas>
        </BoxReservas>
      </SessaoReservas>
    </>
  );
};

export default ReservaDashboard;
