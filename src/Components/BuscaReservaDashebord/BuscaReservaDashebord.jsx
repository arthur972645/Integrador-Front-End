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
  const [mensagemErro, setMensagemErro] = useState('');  // Estado para mensagem de erro

  // Função para verificar se é um CPF válido
  const validarCpf = (cpf) => {
    // Validação de CPF com expressão regular
    const regexCpf = /^[0-9]{11}$/;  // O CPF deve ter exatamente 11 números
    return regexCpf.test(cpf);  // Retorna true ou false
  };

  const buscarReservas = async () => {
    setLoading(true);
    setBuscou(true);
    setMensagemErro('');  // Limpar mensagem de erro antes de uma nova busca

    // Verificar se CPF está no formato correto
    if (validarCpf(cpf)) {
      try {
        // Remover qualquer caractere não numérico do CPF
        const cpfNumerico = cpf.replace(/\D/g, ''); 

        // Requisição à API com o CPF válido
        const response = await axios.get(`http://localhost:3333/usuarios/cpf`, {
          params: { cpf: cpfNumerico },  // Enviar o CPF no formato numérico
        });
        
        if (response.data) {
          setResultados(response.data);  // Exibir os dados do usuário
        } else {
          setMensagemErro('Nenhum usuário encontrado com esse CPF.');
          setResultados([]);  // Limpar os resultados se não encontrar o usuário
        }
      } catch (error) {
        console.error("Erro ao buscar o usuário:", error);
        setMensagemErro("Ocorreu um erro ao buscar o CPF.");
        setResultados([]);
      } finally {
        setLoading(false);
      }
    } else if (diaInicio && diaFim) {
      // Se não for CPF, mas houver datas, faz a busca por datas
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
      // Se não for CPF válido nem houver datas, exibe uma mensagem de erro
      setMensagemErro("Por favor, insira um CPF válido ou um intervalo de datas.");
      setResultados([]);  // Limpar os resultados em caso de erro
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

      {mensagemErro && <ErroMensagem>{mensagemErro}</ErroMensagem>} {/* Exibe a mensagem de erro */}
    </EstilizacaoSessaoBusca>
  );
};

export default BuscarReservas;