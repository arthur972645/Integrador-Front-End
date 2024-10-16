import React from "react";
import './Domo.css'; // Correção aqui
import { Link } from "react-router-dom";
import MainFoto from './img/fotoPrincipal.png';

export const Domo = () => {
    return (
        <div className="page">
            <div className="nomeHosp">Lorem ipsum</div>
            <div className="img-main">
                <img src={MainFoto} alt="Imagem do domo" />
            </div>
        </div>
    )
}

export default Domo;
