import React, { useState } from 'react';
import styled from 'styled-components';

const EstilizacaoSessaoBusca = styled.div`
  display: flex;
  justify-content: center;
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

const BuscaReservas = ({ reservas, setResultados, setLoading, setBuscou }) => {
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [cpf, setCpf] = useState('');

  const buscarReservas = () => {
    setLoading(true);
    setBuscou(true);

    let reservasFiltradas = reservas;

    // Filtro por CPF prioritário
    if (cpf) {
      reservasFiltradas = reservasFiltradas.filter((reserva) =>
        reserva.cpf.includes(cpf)
      );
    }

    // Filtros por data (se não for pesquisar por CPF)
    if (!cpf && ano) {
      if (dia && mes) {
        const dataSelecionada = `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
        reservasFiltradas = reservasFiltradas.filter(
          (reserva) => reserva.checkin === dataSelecionada
        );
      } else if (mes) {
        reservasFiltradas = reservasFiltradas.filter((reserva) => {
          const [resAno, resMes] = reserva.checkin.split('-');
          return resAno === ano && resMes === mes.padStart(2, '0');
        });
      } else {
        reservasFiltradas = reservasFiltradas.filter((reserva) =>
          reserva.checkin.startsWith(ano)
        );
      }
    }

    setResultados(reservasFiltradas);
    setLoading(false);
  };

  return (
    <EstilizacaoSessaoBusca>
      <InputBusca
        type="text"
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <InputBusca
        type="number"
        placeholder="Dia"
        value={dia}
        onChange={(e) => setDia(e.target.value)}
      />
      <InputBusca
        type="number"
        placeholder="Mês"
        value={mes}
        onChange={(e) => setMes(e.target.value)}
      />
      <InputBusca
        type="number"
        placeholder="Ano"
        value={ano}
        onChange={(e) => setAno(e.target.value)}
      />
      <BotaoBuscar onClick={buscarReservas}>Buscar</BotaoBuscar>
    </EstilizacaoSessaoBusca>
  );
};

export default BuscaReservas;
