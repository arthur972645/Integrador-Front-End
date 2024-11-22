
import styled from 'styled-components';
import TextoInformativo from '../../Components/TextoInformativo/TextoInformativo.jsx';

const SessaoReservas = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 2rem;
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
  background-color: #F6F8FA;
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

const LucoMensal = () => {
  


  return (
    <>
    <TextoInformativo Informacao="Financeiro"/>
      <SessaoReservas>
        <BoxReservas>
          <Reservas>

          </Reservas>
        </BoxReservas>
      </SessaoReservas>
    </>
    
  );
};

export default LucoMensal;




