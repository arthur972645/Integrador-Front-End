  import React, { useState } from 'react';
  import styled from 'styled-components';
  import BuscarValorTotalPorPeriodo from '../BuscarValorTotalPorPeriodo/BuscarValorTotalPorPeriodo.jsx';
  const SessaoFinanceiroLucro = styled.section`
  height: 60vh;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding-left: 1rem;
    padding-top: 1rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding-left: 1rem;
    padding-top: 1rem;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    height: 50vh;
    padding-left: 1rem;
    padding-top: 1rem;
  }
`;

const BoxFinanceiroLucro = styled.div`
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
  }
  @media (max-width: 480px) {
    width: 90%;
    height: auto;
    padding: 10px;
  }
  @media (max-width: 1024px) {
    width: 70%;
    height: 70vh;
    padding: 10px;
  }


`;

const Lucro = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background-color: #F6F8FA;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 15px;
  }
  @media (max-width: 1024px) {
    padding: 15px;
  }
`;

const ValorTodal = styled.div`
background-color: #f1f8ff;
box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.09);
border-radius: 20px;
  height: 50%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 40%;
  }
  @media (max-width: 480px) {
    height: 40%;
  }
  @media (max-width: 1024px) {
    height: 50%;
  }
`;
const LucroPorPeriodoParagrafo = styled.p`
  font-size: 18px;
    font-weight: 500;
`
const LinhaHorizontal = styled.hr`
  width: 100%;
  border: 1px solid #ccc;
`;



const LucroPorPeriodo = () => {
  const [loading, setLoading] = useState(false);      
  const [valorTotal, setValorTotal] = useState(null); 

  return (
    <SessaoFinanceiroLucro>
      <BoxFinanceiroLucro>
        <Lucro>
          <LucroPorPeriodoParagrafo>Lucro por período</LucroPorPeriodoParagrafo>
          <LinhaHorizontal />
          <BuscarValorTotalPorPeriodo
            setLoading={setLoading}
            setValorTotal={setValorTotal} 
          />

          {loading && <p>Carregando...</p>}
          
          {valorTotal !== null && (
            <ValorTodal>
              <h2>Valor Total: R${valorTotal},00</h2>
            </ValorTodal>
          )}
        </Lucro>
      </BoxFinanceiroLucro>
    </SessaoFinanceiroLucro>
  );
};

export default LucroPorPeriodo;
