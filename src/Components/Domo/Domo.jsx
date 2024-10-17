import React, { useState } from "react";
import './Domo.css'; // Estilos específicos do componente Domo
import { Link } from "react-router-dom";
import MainFoto from './img/fotoPrincipal.png';
import banheiro from './img/banheiro.png';
import cozinha from './img/cozinha.png';
import quarto from './img/quarto.png';

export const Domo = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleReservation = () => {
    alert(`Reserva confirmada! Check-in: ${checkIn}, Check-out: ${checkOut}, Hóspedes: ${guests}`);
  };

  return (
    <div className="domo-page">
      {/* Detalhes do Domo */}
      <div className="domo-details">
        <div className="domo-images">
          <img
            src={MainFoto}
            alt="Principal Room"
            className="main-image"
          />
          <div className="small-images">
            <img src={banheiro} alt="Banheiro" />
            <img src={cozinha} alt="Cozinha" />
            <img src={quarto} alt="Quarto" />
          </div>
        </div>
      </div>

      {/* Formulário de Reserva */}
      <div className="reservation-form">
        <h2>R$590 <span>Por noite</span></h2>
        <label>CHECK-IN</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
        <label>CHECK-OUT</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
        <label>HÓSPEDES</label>
        <select value={guests} onChange={(e) => setGuests(e.target.value)}>
          <option value={1}>1 hóspede</option>
          <option value={2}>2 hóspedes</option>
          <option value={3}>3 hóspedes</option>
        </select>
        <button onClick={handleReservation}>FAZER RESERVA</button>
      </div>

      {/* Link para outras páginas */}
      <div className="navigation-links">
        <Link to="/">Voltar para Home</Link>
      </div>
    </div>
  );
};

export default Domo;