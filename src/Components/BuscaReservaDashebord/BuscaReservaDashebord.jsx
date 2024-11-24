import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const EstilizacaoSessaoBusca = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const InputBusca = styled.input`
  width: 20%;
  padding: 8px;
  margin-right: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const BotaoBuscar = styled.button`
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

const BuscarReservas = ({ setResultados, setLoading, setBuscou }) => {
  const [cpf, setCpf] = useState('');
  const [diaInicio, setDiaInicio] = useState('');
  const [diaFim, setDiaFim] = useState('');
  const [mensagemErro, setMensagemErro] = useState(''); 

  
  const validarCpf = (cpf) => {
    
    const regexCpf = /^[0-9]{11}$/;  
    return regexCpf.test(cpf);  
  };

  const buscarReservas = async () => {
    setLoading(true);
    setBuscou(true);
    setMensagemErro('');  

    
    if (validarCpf(cpf)) {
      try {
       
        const cpfNumerico = cpf.replace(/\D/g, ''); 

        
        const response = await axios.get(`http://localhost:3333/usuarios/cpf`, {
          params: { cpf: cpfNumerico },  
        });
        
        if (response.data) {
          setResultados(response.data);  
        } else {
          setMensagemErro('Nenhum usuário encontrado com esse CPF.');
          setResultados([]); 
        }
      } catch (error) {
        console.error("Erro ao buscar o usuário:", error);
        setMensagemErro("Ocorreu um erro ao buscar o CPF.");
        setResultados([]);
      } finally {
        setLoading(false);
      }
    } else if (diaInicio && diaFim) {
      
      try {
        const response = await axios.get('http://localhost:3333/usuarios', {
          params: {
            initial: diaInicio,
            final: diaFim,
          },
        });

        setResultados(response.data);
      } catch (error) {
        console.error("Erro ao buscar reservas:", error);
        setResultados([]);
        setMensagemErro('Ocorreu um erro ao buscar as reservas.');
      } finally {
        setLoading(false);
      }
    } else {
     
      setMensagemErro("Por favor, insira um CPF válido ou um intervalo de datas.");
      setResultados([]);  
      setLoading(false);
    }
  };

  return (
    <EstilizacaoSessaoBusca>
      <InputBusca
        type="text"
        placeholder="Digite o CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
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
      <BotaoBuscar onClick={buscarReservas}>Buscar</BotaoBuscar>

      {mensagemErro && <ErroMensagem>{mensagemErro}</ErroMensagem>} 
    </EstilizacaoSessaoBusca>
  );
};

export default BuscarReservas;