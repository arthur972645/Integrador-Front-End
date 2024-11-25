  import React, { useState } from 'react';
  import styled from 'styled-components';
  import BuscarValorTotal from '../BuscaValorTotalDashebord/BuscaValorTotalDashebord.jsx';
  import GraficoSetores from '../GraficoSetoresDashebord/GraficoSetoresDashebord.jsx';
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
  height: 50%;
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
    const [resultados, setResultados] = useState([]);  
    const [loading, setLoading] = useState(false);      
    const [buscou, setBuscou] = useState(false);       
    const [valorTotal, setValorTotal] = useState(null); 

    return (
      <SessaoFinanceiroLucro>
        <BoxFinanceiroLucro>
          <Lucro>
           <LucroPorPeriodoParagrafo>Lucro por periódo</LucroPorPeriodoParagrafo>
           <LinhaHorizontal />
            <BuscarValorTotal
              setResultados={setResultados}
              setLoading={setLoading}
              setBuscou={setBuscou}
              setValorTotal={setValorTotal} 
            />

            {loading && <p>Carregando...</p>}
            {!loading && resultados.length === 0 && <p>Nenhum dado encontrado</p>} 
            
            
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
