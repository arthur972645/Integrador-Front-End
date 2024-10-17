import React from "react";
import MapsImg from "./img/maps.png";
import pessoa from "./img/pessoa.png";
import caixaPergunta from "./img/caixaPergunta.png";
import './Contato.css';
import { Link } from "react-router-dom";
import Mapa from './Mapa'; // Importa o componente Mapa

export const Contato = () => {
  return (
    <div className="frame">
      <p className="quer-entrar-em">
        <span className="quer-amarelo">Quer</span>
        <span className="span"> entrar em contato?</span>
      </p>
      <div className="caixas">
        <div className="contato">
          <div className="card-contato1">
            <img className="imgContato" alt="Pessoa" src={pessoa} />
            <div className="text-perguntas">
              <h2>Perguntas Frequentes</h2>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <button className="button">VER PERGUNTAS</button>
            </div>
          </div>
          <div className="card-contato2">
            <img className="imgContato" alt="caixaPergunta" src={caixaPergunta} />
            <div className="text-perguntas">
              <h2>Fale com a gente</h2>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <button className="button">ENTRE EM CONTATO</button>
            </div>
          </div>
        </div>
        <div className="map">
          <Mapa /> {/* Substitui a imagem do mapa pelo componente Mapa */}
        </div>
      </div>
    </div>
  );
};

export default Contato;
