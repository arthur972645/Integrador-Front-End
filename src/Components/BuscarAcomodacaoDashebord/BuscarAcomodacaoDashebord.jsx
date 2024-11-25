import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const EstilizacaoSessaoBusca = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #7D2626;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  `;

const ErroMensagem = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const BuscarAcomodacaoDashebord = ({ setGraficoData, setLoading }) => {
  const [diaInicio, setDiaInicio] = useState('');
  const [diaFim, setDiaFim] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const BuscarAcomodacao = async () => {
    try {
      if (setLoading) setLoading(true);
      setMensagemErro('');

      if (diaInicio && diaFim) {
        const response = await axios.get('http://localhost:3333/usuarios', {
          params: { initial: diaInicio, final: diaFim },
        });

        console.log('Resposta da API:', response);

        const acomodações = response.data?.Acomodacoes || {};
        if (Object.keys(acomodações).length === 0) {
          setMensagemErro('Nenhum dado encontrado.');
          setGraficoData(null);
        } else {
          const labels = Object.keys(acomodações);
          const data = Object.values(acomodações);

          setGraficoData({
            labels,
            datasets: [
              {
                data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E44AD', '#1ABC9C', '#F39C12'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E44AD', '#1ABC9C', '#F39C12'],
              },
            ],
          });
        }
      } else {
        setMensagemErro('Por favor, preencha ambos os campos de data.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setMensagemErro('Erro ao buscar dados.');
      setGraficoData(null);
    } finally {
      if (setLoading) setLoading(false);
    }
  };

  return (
    <div>
      <EstilizacaoSessaoBusca>
        <InputBusca
          type="date"
          value={diaInicio}
          onChange={(e) => setDiaInicio(e.target.value)}
        />
        <InputBusca
          type="date"
          value={diaFim}
          onChange={(e) => setDiaFim(e.target.value)}
        />
        <BotaoBuscar onClick={BuscarAcomodacao}>Buscar</BotaoBuscar>
      </EstilizacaoSessaoBusca>
      {mensagemErro && <ErroMensagem>{mensagemErro}</ErroMensagem>}
    </div>
  );
};

export default BuscarAcomodacaoDashebord;
