import styled from "styled-components";
import TextoInformativo from "../TextoInformativo/TextoInformativo.jsx";
import LucroPorPeriodo from "../LucroPorPeriodo/LucroPorPeriodo.jsx";
import GraficoSetoresDashebord from "../GraficoSetoresDashebord/GraficoSetoresDashebord.jsx";

const SessaoFinanciero1 = styled.section`
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 0; 
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
