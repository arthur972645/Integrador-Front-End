import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import Hospedagem01 from "../../Image/Hospedagem01.png";
import Hospedagem02 from "../../Image/Hospedagem02.png";
import Hospedagem03 from "../../Image/Hospedagem03.png";
import Hospedagem04 from "../../Image/Hospedagem04.png";
import Hospedagem05 from "../../Image/Hospedagem05.png";
import Hospedagem06 from "../../Image/Hospedagem06.png";

import { MdOutlineSevereCold } from "react-icons/md";
import { LuRefrigerator } from "react-icons/lu";
import { MdOutlineShower } from "react-icons/md";
import { TbToolsKitchen3 } from "react-icons/tb";
import { IoWifi } from "react-icons/io5";
import { FaTv } from "react-icons/fa";

import { Link } from "react-router-dom";
import './Main-PaginaAcomodacoes.css';

const acomodacoes = [
  { 
    nome: "Domo", 
    imagem: Hospedagem01, 
    nota: 4.5, 
    descricao: "Obs: Os valores exibidos no site estão sujeitos a constantes atualizações. Nos feriados e datas comemorativas o valor da diária também é", 
    Icone: <MdOutlineSevereCold />, 
    IconeWife: <IoWifi />, 
    IconeTv: <FaTv />, 
    IconeFrigobar: <LuRefrigerator />, 
    IconeDucha: <MdOutlineShower />, 
    IconeCozinha: <TbToolsKitchen3 />, 
    tooltip: "Ar-condicionado", 
    DescricaoWife: "Wi-Fi", 
    DescricaoTv: "Tv", 
    DescricaoFrigobar: "Frigobar", 
    DescricaoDucha: "Ducha", 
    DescricaoCozinha: "Cozinha" 
  },
  { 
    nome: "Charrua-Bus", 
    imagem: Hospedagem02, 
    nota: 5.0, 
    descricao: "Obs: Os valores exibidos no site estão sujeitos a constantes atualizações. Nos feriados e datas comemorativas o valor da diária também é",
    Icone: <MdOutlineSevereCold />, 
    IconeWife: <IoWifi />, 
    IconeTv: <FaTv />, 
    IconeFrigobar: <LuRefrigerator />, 
    IconeDucha: <MdOutlineShower />, 
    IconeCozinha: <TbToolsKitchen3 />, 
    tooltip: "Ar-condicionado", 
    DescricaoWife: "Wi-Fi", 
    DescricaoTv: "Tv", 
    DescricaoFrigobar: "Frigobar", 
    DescricaoDucha: "Ducha", 
    DescricaoCozinha: "Cozinha" 
  },
  { 
    nome: "Chale-Familia", 
    imagem: Hospedagem03, 
    nota: 4.8, 
    descricao: "Obs: Os valores exibidos no site estão sujeitos a constantes atualizações. Para mais detalhes entre em contato por telefone. Com ampla vista para o",
    Icone: <MdOutlineSevereCold />, 
    IconeWife: <IoWifi />, 
    IconeTv: <FaTv />, 
    IconeFrigobar: <LuRefrigerator />, 
    IconeDucha: <MdOutlineShower />, 
    IconeCozinha: <TbToolsKitchen3 />, 
    tooltip: "Ar-condicionado", 
    DescricaoWife: "Wi-Fi", 
    DescricaoTv: "Tv", 
    DescricaoFrigobar: "Frigobar", 
    DescricaoDucha: "Ducha", 
    DescricaoCozinha: "Cozinha" 
  },
  { 
    nome: "Suite-com-cozinha", 
    imagem: Hospedagem04, 
    nota: 4.9, 
    descricao: "Obs: Os valores exibidos no site estão sujeitos a constantes atualizações. Para mais detalhes entre em contato por telefone. Esta acomodação",
    Icone: <MdOutlineSevereCold />, 
    IconeWife: <IoWifi />, 
    IconeTv: <FaTv />, 
    IconeCozinha: <TbToolsKitchen3 />, 
    tooltip: "Ar-condicionado", 
    DescricaoWife: "Wi-Fi", 
    DescricaoTv: "Tv", 
    DescricaoCozinha: "Cozinha" 
  },
  { 
    nome: "Cabana", 
    imagem: Hospedagem05, 
    nota: 4.7, 
    descricao: "Obs: Os valores exibidos no site estão sujeitos a constantes atualizações. Para mais detalhes entre em contato por telefone. Esta acomodação está",
    Icone: <MdOutlineSevereCold />, 
    IconeWife: <IoWifi />, 
    IconeTv: <FaTv />, 
    IconeFrigobar: <LuRefrigerator />, 
    IconeDucha: <MdOutlineShower />, 
    IconeCozinha: <TbToolsKitchen3 />, 
    tooltip: "Ar-condicionado", 
    DescricaoWife: "Wi-Fi", 
    DescricaoTv: "Tv", 
    DescricaoFrigobar: "Frigobar", 
    DescricaoDucha: "Ducha", 
    DescricaoCozinha: "Cozinha" 
  },
  { 
    nome: "Estacionamento-para-overlanders", 
    imagem: Hospedagem06, 
    nota: 4.6, 
    descricao: "Obs: Os valores exibidos no site estão sujeitos a constantes atualizações. Para mais detalhes entre em contato por telefone. A pousada conta",
    IconeWife: <IoWifi />, 
    IconeDucha: <MdOutlineShower />, 
    DescricaoWife: "Wi-Fi", 
    DescricaoDucha: "Ducha", 

  }
];

const MainPaginaAcomodacoes = () => {
  const [hoveredIconIndex, setHoveredIconIndex] = useState(null);
  const [hoveredWifiIndex, setHoveredWifiIndex] = useState(null); 
  const [hoveredTvIndex, setHoveredTvIndex] = useState(null); 
  const [hoveredFrigobarIndex, setHoveredFrigobarIndex] = useState(null); 
  const [hoveredCozinhaIndex, setHoveredCozinhaIndex] = useState(null); 
  const [hoveredDuchaIndex, setHoveredDuchaIndex] = useState(null); 

  const IconeArCondicionadoEnter = (index) => setHoveredIconIndex(index);
  const IconeArCondicionadoLeve = () => setHoveredIconIndex(null);

  const IconeWifeEnter = (index) => setHoveredWifiIndex(index);
  const IconeWifeLeve = () => setHoveredWifiIndex(null);

  const IconeTvEnter = (index) => setHoveredTvIndex(index);
  const IconeTvLeve = () => setHoveredTvIndex(null);

  const IconeFigobarEnter = (index) => setHoveredFrigobarIndex(index);
  const IconeFigobarLeve = () => setHoveredFrigobarIndex(null);

  const IconeCozinhaEnter = (index) => setHoveredCozinhaIndex(index);
  const IconeCozinhaLeve = () => setHoveredCozinhaIndex(null);

  const IconeDuchaEnter = (index) => setHoveredDuchaIndex(index); // Novo método para a ducha
  const IconeDuchaLeve = () => setHoveredDuchaIndex(null); 

  return (
    <section className="Main-Acomodacoes">
      {acomodacoes.map((acomodacao, index) => (
        <div key={index} className="Box-Acomodacoes">
          <div className="Box-Imagem">
            <img src={acomodacao.imagem} alt={acomodacao.nome} className="Imagens-acomodacoes" />
          </div>
          <div className="Box-informacoes">
            <div className="Box-nota-nome">
              <p className="nome-acomodacao">{acomodacao.nome.replace("-", " ")}</p>
              <div className="Box-nota">
                {acomodacao.nota.toFixed(1)} <IoIosStar className="Icon-estrela-nota" />
              </div>
            </div>
            <div className="Box-descricao">
              <p>{acomodacao.descricao}</p>
            </div>
            <hr />
            <div className="Box-Icon">
              {/* Ícone 1 com tooltip (Ar-condicionado) */}
              <div
                className="Icon-with-tooltip"
                onMouseEnter={() => IconeArCondicionadoEnter(index)}
                onMouseLeave={IconeArCondicionadoLeve}
                style={{ position: "relative", display: "inline-block", marginLeft: "5px", fontSize: "25px" }}
              >
                {acomodacao.Icone}
                {hoveredIconIndex === index && acomodacao.tooltip && (
                  <div className="tooltip">
                    {acomodacao.tooltip}
                  </div>
                )}
              </div>

              {/* Ícone 2 (Wi-Fi) com tooltip */}
              <div
                className="Icon-with-tooltip"
                onMouseEnter={() => IconeWifeEnter(index)}
                onMouseLeave={IconeWifeLeve}
                style={{ position: "relative", display: "inline-block", marginLeft: "5px", fontSize: "25px" }}
              >
                {acomodacao.IconeWife}
                {hoveredWifiIndex === index && acomodacao.DescricaoWife && (
                  <div className="tooltip">
                    {acomodacao.DescricaoWife}
                  </div>
                )}
              </div>

              {/* Ícone 3 (Tv) com tooltip */}
              <div
                className="Icon-with-tooltip"
                onMouseEnter={() => IconeTvEnter(index)}
                onMouseLeave={IconeTvLeve}
                style={{ position: "relative", display: "inline-block", marginLeft: "5px", fontSize: "25px" }}
              >
                {acomodacao.IconeTv}
                {hoveredTvIndex === index && acomodacao.DescricaoTv && (
                  <div className="tooltip">
                    {acomodacao.DescricaoTv}
                  </div>
                )}
              </div>

              {/* Ícone 4 (Frigobar) com tooltip */}
              <div
                className="Icon-with-tooltip"
                onMouseEnter={() => IconeFigobarEnter(index)}
                onMouseLeave={IconeFigobarLeve}
                style={{ position: "relative", display: "inline-block", marginLeft: "5px", fontSize: "25px" }}
              >
                {acomodacao.IconeFrigobar}
                {hoveredFrigobarIndex === index && acomodacao.DescricaoFrigobar && (
                  <div className="tooltip">
                    {acomodacao.DescricaoFrigobar}
                  </div>
                )}
              </div>

              {/* Ícone 5 (Cozinha) com tooltip */}
              <div
                className="Icon-with-tooltip"
                onMouseEnter={() => IconeCozinhaEnter(index)}
                onMouseLeave={IconeCozinhaLeve}
                style={{ position: "relative", display: "inline-block", marginLeft: "5px", fontSize: "25px" }}
              >
                {acomodacao.IconeCozinha}
                {hoveredCozinhaIndex === index && acomodacao.DescricaoCozinha && (
                  <div className="tooltip">
                    {acomodacao.DescricaoCozinha}
                  </div>
                )}
              </div>

              <div
                className="Icon-with-tooltip"
                onMouseEnter={() => IconeDuchaEnter(index)} // Evento de mouse enter para ducha
                onMouseLeave={IconeDuchaLeve} // Evento de mouse leave para ducha
                style={{ position: "relative", display: "inline-block", marginLeft: "5px", fontSize: "25px" }}
              >
                {acomodacao.IconeDucha}
                {hoveredDuchaIndex === index && acomodacao.DescricaoDucha && ( // Condição para mostrar a tooltip da ducha
                  <div className="tooltip">
                    {acomodacao.DescricaoDucha}
                  </div>
                )}
              </div>

            </div>
            <div className="Sessao-Button-reserva">
              <Link to={`/Acomodacao/${acomodacao.nome}`}>
                <button className="btn-reserva">Fazer reserva</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MainPaginaAcomodacoes;
