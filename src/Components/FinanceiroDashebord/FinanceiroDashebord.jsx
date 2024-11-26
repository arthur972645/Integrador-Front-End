import styled from "styled-components";
import TextoInformativo from "../TextoInformativo/TextoInformativo.jsx";
import LucroPorPeriodo from "../LucroPorPeriodo/LucroPorPeriodo.jsx";
import GraficoSetoresDashebord from "../GraficoSetoresDashebord/GraficoSetoresDashebord.jsx";

const SessaoFinanciero1 = styled.div`
  height: 60vh;
  display: grid;
  grid-template-columns: 1fr 1fr; 

  @media (max-width: 768px) {
    display: inline;
    align-items: center;
    margin-bottom: 12px;
    justify-content: center;
    gap: none;
    grid-template-columns: none; 
  }
  @media (max-width: 480px) {
    display: inline;
    margin-bottom: 12px;
    align-items: center;
    justify-content: center;
    gap: none;
    grid-template-columns: none; 
  }
  @media (max-width: 1024px) {
    display: inline;
    margin-bottom: 12px;
    align-items: center;
    justify-content: center;
    gap: none;
    grid-template-columns: none; 
  }
`;

const Financeiro = () => {
  return (
    <>
      <TextoInformativo Informacao="Financeiro" />
      <SessaoFinanciero1>
        <LucroPorPeriodo />
        <GraficoSetoresDashebord />
      </SessaoFinanciero1>
    </>
  );
};

export default Financeiro;
