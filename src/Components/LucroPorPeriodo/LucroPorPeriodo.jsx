  import React, { useState } from 'react';
  import styled from 'styled-components';
  import BuscarValorTotal from '../BuscaValorTotalDashebord/BuscaValorTotalDashebord.jsx';
  import GraficoSetores from '../GraficoSetoresDashebord/GraficoSetoresDashebord.jsx';

  const SessaoFinanceiroLucro = styled.section`
    height: 40vh;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-top: 2rem;
    padding-right: 1rem;
  `;

  const BoxFinanceiroLucro = styled.div`
    height: 100%;
    width: 60%;
    border-radius: 20px;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
  `;

  const Lucro = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 20px;
    background-color: #F6F8FA;
    padding: 20px;
  `;

  const ValorTodal = styled.div`

    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const LucroPorPeriodo = () => {
    const [resultados, setResultados] = useState([]);  
    const [loading, setLoading] = useState(false);      
    const [buscou, setBuscou] = useState(false);       
    const [valorTotal, setValorTotal] = useState(null); 

    return (
      <SessaoFinanceiroLucro>
        <BoxFinanceiroLucro>
          <Lucro>
           
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
                <h3>Valor Total: R${valorTotal},00</h3>
              </ValorTodal>
            )}
          </Lucro>
        </BoxFinanceiroLucro>
      
      </SessaoFinanceiroLucro>
    );
  };

  export default LucroPorPeriodo;
