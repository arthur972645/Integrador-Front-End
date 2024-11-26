import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const EstilizacaoSessaoBusca = styled.div`
  width: 100%;
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
    display: inline;
    padding-top: 5px;
  }
`;

const SelectBusca = styled.select`
  height: 40px;
  width: 70%;
  padding: 8px;
  margin-right: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const BotaoBuscar = styled.button`
  height: 40px;
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

const SessaoBusca = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SessaoLabel = styled.label`
  display: flex;
  justify-content: center;
  margin-right: 10px;
`
const BuscarFaturamentoSemestre = ({ setGraficoData, setLoading }) => {

  return (
    <div>
      <EstilizacaoSessaoBusca>
        <SessaoBusca>
          <SessaoLabel>
            <label htmlFor="Semestre">Semestre: </label>
          </SessaoLabel>
          <SelectBusca name="Semestre" id="">
            <option value="Primeiro Semestre">Primeiro Semestre</option>
            <option value="Segundo Semestre">Segundo Semestre</option>
          </SelectBusca>
        
        </SessaoBusca>
        <SessaoBusca>
        <SessaoLabel>
          <label htmlFor="Ano">Ano: </label>
        </SessaoLabel>
        <SelectBusca name="Semestre" id="">
          <option value="Ano 2024">2024</option>
          <option value="Ano 2023">2023</option>
        </SelectBusca>
        </SessaoBusca>
       
        <BotaoBuscar >Buscar</BotaoBuscar>
      </EstilizacaoSessaoBusca>
     
    </div>
  );
};

export default BuscarFaturamentoSemestre;
