import styled from "styled-components";
import TextoInformativo from "../TextoInformativo/TextoInformativo.jsx";
import LucroPorPeriodo from "../LucroPorPeriodo/LucroPorPeriodo.jsx";

const SessaoFinanciero1 = styled.section`
  border: 2px solid red;
  height: 40vh;
`;

const BoxReservas = styled.div`
  height: 70%;
  width: 60%;
  border-radius: 40px;
  box-shadow: 0px 0px 35px -8px rgba(0, 0, 0, 0.4);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Reservas = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 40px;
  background-color: #f6f8fa;
  overflow-y: auto;
  padding: 20px;
`;

const ResultadoBusca = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const ResultadoItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const EstilizacaoParagrafo = styled.p`
  background-color: #fff;
`;

const Financeiro = () => {
  return (
    <>
      <TextoInformativo Informacao="Financeiro" />
      <SessaoFinanciero1>
        <LucroPorPeriodo />
      </SessaoFinanciero1>
      
    </>
  );
};

export default Financeiro;
