import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const EstilizacaoSessaoBusca = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
  @media (max-width: 768px) {
    display: inline;
    padding-top: 5px;
    
  }
  @media (max-width: 480px) {
    display: inline;
    padding-top: 5px;
  }
  @media (max-width: 1024px) {
    display: inline;
    padding-top: 5px;
  }
`;

const InputBusca = styled.input`
  height: 35px;
  width: 40%;
  padding: 8px;
  margin-right: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const BotaoBuscar = styled.button`
  height: 35px;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  font-size: 16px;
  background-color: #7D2626;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;

const ErroMensagem = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

function getMonthName(monthNumber) {
  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  return months[monthNumber - 1];
}

function getMonthRange(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const monthsData = [];

  while (start <= end) {
    const monthStart = new Date(start.getFullYear(), start.getMonth(), 1);
    const monthEnd = new Date(start.getFullYear(), start.getMonth() + 1, 0); 

    if (monthStart > end) break;

    monthsData.push({
      month: getMonthName(start.getMonth() + 1), 
      startDate: monthStart.toISOString().split('T')[0], 
      endDate: (monthEnd > end ? end : monthEnd).toISOString().split('T')[0],  
    });

    start.setMonth(start.getMonth() + 1); 
  }

  return monthsData;
}


const BuscarValorTotal = ({ setResultados, setLoading, setBuscou, setValorTotal, handleResultado }) => {
  const [diaInicio, setDiaInicio] = useState('');
  const [diaFim, setDiaFim] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const buscarValorTotal = async () => {
    setLoading(true);
    setBuscou(true);
    setMensagemErro('');

    if (diaInicio && diaFim) {
      const monthsData = getMonthRange(diaInicio, diaFim);
      const monthlyResults = {}; 
      try {
        for (const { month, startDate, endDate } of monthsData) {
        
          const response = await axios.get('http://localhost:3333/usuarios', {
            params: {
              initial: startDate,
              final: endDate,
            },
          });

         
          monthlyResults[month] = response.data; 
          
        
        }
        
        
        handleResultado(monthlyResults);

      
        let total = 0;
        for (const month in monthlyResults) {
          if (monthlyResults[month]?.valortotal) {
            total += monthlyResults[month].valortotal;
          }
        }
        
        setValorTotal(total); 

        
        if (Object.keys(monthlyResults).length === 0) {
          setMensagemErro('Nenhum resultado encontrado para esse período.');
        }

      } catch (error) {
        console.error("Erro ao buscar reservas:", error);
        setResultados([]);
        setMensagemErro('Ocorreu um erro ao buscar as reservas.');
      } finally {
        setLoading(false);
      }
    } else {
      setMensagemErro('Por favor, preencha ambos os campos de data.');
      setLoading(false);
    }
  };

  return (
    <EstilizacaoSessaoBusca>
      <InputBusca
        type="date"
        placeholder="Data Início"
        value={diaInicio}
        onChange={(e) => setDiaInicio(e.target.value)}
      />
      <InputBusca
        type="date"
        placeholder="Data Fim"
        value={diaFim}
        onChange={(e) => setDiaFim(e.target.value)}
      />
      <BotaoBuscar onClick={buscarValorTotal}>Buscar</BotaoBuscar>

      {mensagemErro && <ErroMensagem>{mensagemErro}</ErroMensagem>}
    </EstilizacaoSessaoBusca>
  );
};

export default BuscarValorTotal;


