import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BuscaReservas from '../BuscaReservaDashebord/BuscaReservaDashebord.jsx';
import TextoInformativo from "../../Components/TextoInformativo/TextoInformativo.jsx";

const SessaoReservas = styled.section`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 2rem;
  @media (max-width: 768px) {
    height: 50vh;
    padding-top: 1rem; 
  }
  @media (max-width: 480px) {
    height: 45vh; 
  }
`;

const BoxReservas = styled.div`
  height: 90%;
  width: 60%;
  border-radius: 40px;
  box-shadow: 0px 0px 35px -8px rgba(0, 0, 0, 0.4);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  @media (max-width: 768px) {
    width: 80%; 
    padding: 20px; 
  }
  @media (max-width: 480px) {
    width: 90%;
    padding: 15px; 
  }
`;

const Reservas = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 40px;
  background-color: #F6F8FA;
  overflow-y: auto;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 15px; 
  }
  @media (max-width: 480px) {
    padding: 10px; 
  }
`;

const ResultadoBusca = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 15px; 
  }
  @media (max-width: 480px) {
    padding: 10px; 
  }
`;

const ResultadoItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 8px;
  }
  @media (max-width: 480px) {
    padding: 5px; 
  }
`;

const EstilizacaoParagrafo = styled.p`
  background-color: #fff;
`;

const ReservaDashboard = () => {
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buscou, setBuscou] = useState(false);

  const buscarReservasAPI = async (initial, final) => {
    setLoading(true);
    try {
      // Fazendo uma requisição POST com as datas de início e fim
      const response = await axios.get('http://localhost:3333/usuarios', {
        params     : {
        initial: initial,  // Data de início
        final: final  
        }      // Data de fim
      });
      
      // Atualizando os resultados com a resposta da API
      setResultados(response.data);
      setBuscou(true);  
    } catch (error) {
      console.error("Erro ao buscar reservas:", error);
    } finally {
      setLoading(false);  
    }
  };
  
  useEffect(() => {
    buscarReservasAPI();
  }, []);

  return (
    <>
      <TextoInformativo Informacao="Reservas" />
      <SessaoReservas>
        <BoxReservas>
          <Reservas>
            <BuscaReservas
                reservas={resultados}
                setResultados={setResultados}
                setLoading={setLoading}
                setBuscou={setBuscou}
              />

            {loading ? (
              <div>Carregando...</div>
            ) : (
              <ResultadoBusca>
      
              {resultados.valortotal > 0 ? (
                resultados.ListaDeUsers.map((reserva, index) => (
                  <ResultadoItem key={index}>
                    <EstilizacaoParagrafo>Nome: {reserva.nome}</EstilizacaoParagrafo>
                    <EstilizacaoParagrafo>CPF: {reserva.cpf}</EstilizacaoParagrafo>
                    <EstilizacaoParagrafo>Email: {reserva.email}</EstilizacaoParagrafo>
                    <EstilizacaoParagrafo>Hospedagem: {reserva.hospedagem}</EstilizacaoParagrafo>
                    <EstilizacaoParagrafo>Preço Pago: {reserva.valor}</EstilizacaoParagrafo> {/* Aqui é o valor, não preco */}
                    <EstilizacaoParagrafo>Check-in: {new Date(reserva.checkin).toLocaleDateString()}</EstilizacaoParagrafo> {/* Formatação de data */}
                    <EstilizacaoParagrafo>Check-out: {new Date(reserva.checkout).toLocaleDateString()}</EstilizacaoParagrafo> {/* Formatação de data */}
                  </ResultadoItem>
                ))
              ) : buscou ? (
                
                <p>Nenhuma reserva foi encontrada para essa data</p>
              ) : (
                <p>Pesquise uma reserva</p>
              )}
                    
            </ResultadoBusca>
            
            )}
          </Reservas>
        </BoxReservas>
      </SessaoReservas>
    </>
  );
};

export default ReservaDashboard;
