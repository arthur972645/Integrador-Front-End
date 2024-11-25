import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const EstilizacaoSessaoBusca = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    display: inline;
    padding-top: 5px;
    
  }

  @media (max-width: 480px) {
    display: inline;
    padding-top: 5px;
  }
  @media (max-width: 1024px) {
    margin-top: 10px;
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

const BuscarValorTotal = ({ setResultados, setLoading, setBuscou, setValorTotal }) => {
  const [diaInicio, setDiaInicio] = useState('');
  const [diaFim, setDiaFim] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const buscarValorTotal = async () => {
    setLoading(true);
    setBuscou(true);
    setMensagemErro('');

    if (diaInicio && diaFim) {
      try {
        const response = await axios.get('http://localhost:3333/usuarios', {
          params: {
            initial: diaInicio,
            final: diaFim,
          },
        });

          console.log(response.data)
       
        const valorTotalRecebido = response.data.valortotal;
        setValorTotal(valorTotalRecebido); 

       
        setResultados(response.data.ListaDeUsers);

       
        if (response.data.ListaDeUsers.length === 0) {
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
