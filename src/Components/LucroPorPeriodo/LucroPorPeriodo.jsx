  import React, { useState } from 'react';
  import styled from 'styled-components';
  import BuscarValorTotal from '../BuscaValorTotalDashebord/BuscaValorTotalDashebord.jsx';

  const SessaoFinanceiroLucro = styled.section`
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 2rem;
  `;

  const BoxFinanceiroLucro = styled.div`
    height: 90%;
    width: 30%;
    border-radius: 20px;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
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
    const [resultados, setResultados] = useState([]);  // Guardar os resultados da busca
    const [loading, setLoading] = useState(false);      // Estado de carregamento
    const [buscou, setBuscou] = useState(false);        // Marca se a busca foi realizada
    const [valorTotal, setValorTotal] = useState(null); // Estado para armazenar o valor total

    return (
      <SessaoFinanceiroLucro>
        <BoxFinanceiroLucro>
          <Lucro>
            {/* Componente que vai tratar da busca por data */}
            <BuscarValorTotal
              setResultados={setResultados}
              setLoading={setLoading}
              setBuscou={setBuscou}
              setValorTotal={setValorTotal} // Passa a função setValorTotal para o componente BuscarValorTotal
            />

            {loading && <p>Carregando...</p>}  {/* Mensagem de carregamento */}
            {!loading && resultados.length === 0 && <p>Nenhum dado encontrado</p>} {/* Caso não haja dados */}
            
            {/* Se houver dados, você pode exibir algo aqui */}
       
            {/* Exibe o valor total se ele estiver disponível */}
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
