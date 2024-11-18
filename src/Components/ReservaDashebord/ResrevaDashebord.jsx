import React, { useState } from 'react';
import styled from 'styled-components';

const SessaoReservas = styled.section`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BoxReservas = styled.div`
    height: 70%;
    width: 60%;
    border-radius: 40px;
    box-shadow: 0px 0px 35px -8px rgba(0,0,0,0.40);
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    position: relative; /* Para a barra lateral se posicionar em relação a Box */
`;

const Reservas = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 40px;
    background-color: #F6F8FA;
    padding-right: ${({ resultadoCount }) => (resultadoCount > 1 ? '20px' : '0')}; /* Espaço para a barra lateral */
    overflow-y: auto;
    padding: 20px;
`;

const TituloEBusca = styled.div`
    height: 15%;
    display: flex;
    border-radius: 30px;
    align-items: center;
    padding: 30px;
    justify-content: space-between;
`;

const Titulo = styled.div`
    font-size: 20px;
`;

const InputBusca = styled.input`
    padding: 8px;
    margin-right: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

const BotaoBuscar = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #7D2626;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
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
`

const ReservaDashebord = () => {
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const [resultados, setResultados] = useState([]);
    const [loading, setLoading] = useState(false);

    // Array de dados simulados com mais reservas no mesmo dia
    const reservas = [
        { nome: 'Jon Snow', quarto: '101', checkin: '2024-10-10', checkout: '2024-10-15' },
        { nome: 'Cersei Lannister', quarto: '102', checkin: '2024-10-10', checkout: '2024-10-12' }, // mesma data
        { nome: 'Jaime Lannister', quarto: '103', checkin: '2024-10-12', checkout: '2024-10-17' },
        { nome: 'Arya Stark', quarto: '104', checkin: '2024-10-10', checkout: '2024-10-11' }, // mesma data
        { nome: 'Daenerys Targaryen', quarto: '105', checkin: '2024-10-10', checkout: '2024-10-15' }, // mesma data
        { nome: 'Tyrion Lannister', quarto: '106', checkin: '2024-12-01', checkout: '2024-11-05' },
        { nome: 'Sansa Stark', quarto: '107', checkin: '2024-11-03', checkout: '2024-11-06' },
        { nome: 'Bran Stark', quarto: '108', checkin: '2024-11-05', checkout: '2024-11-10' }
    ];

    // Função para lidar com a busca
    const buscarReservas = () => {
        setLoading(true);

        // Validar campos
        if (!ano) {
            alert('Por favor, selecione o ano!');
            setLoading(false);
            return;
        }

        let reservasFiltradas = [];

        // Filtro das reservas baseado no checkin (dia, mês e ano)
        if (dia && mes) {
            // Filtro completo (ano, mês e dia)
            const dataSelecionada = `${ano}-${mes}-${dia}`;
            reservasFiltradas = reservas.filter(reserva => {
                const checkinData = new Date(reserva.checkin);
                const dataSelecionadaObj = new Date(dataSelecionada);
                return checkinData.toISOString().split('T')[0] === dataSelecionadaObj.toISOString().split('T')[0];
            });
        } else if (mes) {
            // Filtro apenas por mês e ano
            reservasFiltradas = reservas.filter(reserva => {
                const reservaData = new Date(reserva.checkin);
                return reservaData.getFullYear() === parseInt(ano) && reservaData.getMonth() + 1 === parseInt(mes);
            });
        } else if (ano) {
            // Filtro apenas por ano
            reservasFiltradas = reservas.filter(reserva => {
                const reservaData = new Date(reserva.checkin);
                return reservaData.getFullYear() === parseInt(ano);
            });
        }

        setResultados(reservasFiltradas);
        setLoading(false);
    };

    return (
        <SessaoReservas>
            <BoxReservas>
                <Reservas resultadoCount={resultados.length}>
                    <TituloEBusca>
                        <Titulo>Reservas</Titulo>
                        <div>
                            <InputBusca 
                                type="number" 
                                placeholder="Dia" 
                                value={dia}
                                onChange={(e) => setDia(e.target.value)} 
                            />
                            <InputBusca 
                                type="number" 
                                placeholder="Mês" 
                                value={mes}
                                onChange={(e) => setMes(e.target.value)} 
                            />
                            <InputBusca 
                                type="number" 
                                placeholder="Ano" 
                                value={ano}
                                onChange={(e) => setAno(e.target.value)} 
                            />
                            <BotaoBuscar onClick={buscarReservas}>Buscar</BotaoBuscar>
                        </div>
        
                    </TituloEBusca>

                    {loading ? (
                        <div>Carregando...</div>
                    ) : (
                        <ResultadoBusca>
                            {resultados.length > 0 ? (
                                resultados.map((reserva, index) => (
                                    <ResultadoItem key={index}>
                                        <EstilizacaoParagrafo>Nome: {reserva.nome}</EstilizacaoParagrafo>
                                        <EstilizacaoParagrafo>Quarto: {reserva.quarto}</EstilizacaoParagrafo>
                                        <EstilizacaoParagrafo>Check-in: {reserva.checkin}</EstilizacaoParagrafo>
                                        <EstilizacaoParagrafo>Check-out: {reserva.checkout}</EstilizacaoParagrafo>
                                    </ResultadoItem>
                                ))
                            ) : (
                                <p>Nenhum resultado encontrado</p>
                            )}
                        </ResultadoBusca>
                    )}
                </Reservas>
            </BoxReservas>
        </SessaoReservas>
    );
};

export default ReservaDashebord;
