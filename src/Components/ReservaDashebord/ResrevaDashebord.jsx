import React, { useState } from 'react';
import styled from 'styled-components';
import BuscaReservas from '../BuscaReservaDashebord/BuscaReservaDashebord.jsx';
import TextoInformativo from "../../Components/TextoInformativo/TextoInformativo.jsx"

const SessaoReservas = styled.section`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 2rem;
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

const ReservaDashboard = () => {
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buscou, setBuscou] = useState(false);
  const reservas = [
    {
        nome: 'Jon Snow',
        cpf: '123.456.789-01',
        email: 'jon.snow@example.com',
        hospedagem: 'Hospedagem 01',
        preco: 'R$ 500,00',
        checkin: '2024-10-10',
        checkout: '2024-10-15',
    },
    {
        nome: 'Cersei Lannister',
        cpf: '987.654.321-02',
        email: 'cersei.lannister@example.com',
        hospedagem: 'Hospedagem 02',
        preco: 'R$ 400,00',
        checkin: '2024-10-10',
        checkout: '2024-10-12',
    },
    {
        nome: 'Jaime Lannister',
        cpf: '321.654.987-03',
        email: 'jaime.lannister@example.com',
        hospedagem: 'Hospedagem 03',
        preco: 'R$ 600,00',
        checkin: '2024-10-12',
        checkout: '2024-10-17',
    },
    {
        nome: 'Arya Stark',
        cpf: '456.789.123-04',
        email: 'arya.stark@example.com',
        hospedagem: 'Hospedagem 01',
        preco: 'R$ 350,00',
        checkin: '2024-10-10',
        checkout: '2024-10-11',
    },
    {
        nome: 'Daenerys Targaryen',
        cpf: '654.321.987-05',
        email: 'daenerys.targaryen@example.com',
        hospedagem: 'Hospedagem 04',
        preco: 'R$ 800,00',
        checkin: '2024-10-10',
        checkout: '2024-10-15',
    },
    {
        nome: 'Tyrion Lannister',
        cpf: '789.123.456-06',
        email: 'tyrion.lannister@example.com',
        hospedagem: 'Hospedagem 05',
        preco: 'R$ 700,00',
        checkin: '2024-12-01',
        checkout: '2024-11-05',
    },
    {
        nome: 'Sansa Stark',
        cpf: '147.258.369-07',
        email: 'sansa.stark@example.com',
        hospedagem: 'Hospedagem 01',
        preco: 'R$ 400,00',
        checkin: '2024-11-03',
        checkout: '2024-11-06',
    },
    {
        nome: 'Bran Stark',
        cpf: '369.258.147-08',
        email: 'bran.stark@example.com',
        hospedagem: 'Hospedagem 02',
        preco: 'R$ 450,00',
        checkin: '2024-11-05',
        checkout: '2024-11-10',
    },
];


  return (
    <>
    <TextoInformativo Informacao="Reservas"/>
     <SessaoReservas>
      <BoxReservas>
        <Reservas resultadoCount={resultados.length}>
          <BuscaReservas
            reservas={reservas}
            setResultados={setResultados}
            setLoading={setLoading}ReservaDashboard
            setBuscou={setBuscou}
          />

          {loading ? (
            <div>Carregando...</div>
          ) : (
            <ResultadoBusca>
              {resultados.length > 0 ? (
                resultados.map((reserva, index) => (
                  <ResultadoItem key={index}>
                    <EstilizacaoParagrafo>Nome: {reserva.nome}</EstilizacaoParagrafo>
                    <EstilizacaoParagrafo>CPF: {reserva.cpf}</EstilizacaoParagrafo>
                    <EstilizacaoParagrafo>Email: {reserva.email}</EstilizacaoParagrafo>
                    <EstilizacaoParagrafo>Hospedagem: {reserva.hospedagem}</EstilizacaoParagrafo>
                    <EstilizacaoParagrafo>Preço Pago: {reserva.preco}</EstilizacaoParagrafo>
                    <EstilizacaoParagrafo>Check-in: {reserva.checkin}</EstilizacaoParagrafo>
                    <EstilizacaoParagrafo>Check-out: {reserva.checkout}</EstilizacaoParagrafo>
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




