import { IoIosStar } from "react-icons/io";
import Hospedagem01 from "../../Image/Hospedagem01.png";
import Hospedagem02 from "../../Image/Hospedagem02.png";
import Hospedagem03 from "../../Image/Hospedagem03.png";
import Hospedagem04 from "../../Image/Hospedagem04.png";
import Hospedagem05 from "../../Image/Hospedagem05.png";
import Hospedagem06 from "../../Image/Hospedagem06.png";
import { Link } from "react-router-dom";
import './Main-PaginaAcomodacoes.css';

const acomodacoes = [
  { nome: "Domo", imagem: Hospedagem01, nota: 4.5, descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
  { nome: "Charrua-Bus", imagem: Hospedagem02, nota: 5.0, descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
  { nome: "Chale-Familia", imagem: Hospedagem03, nota: 4.8, descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
  { nome: "Suite-com-cozinha", imagem: Hospedagem04, nota: 4.9, descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
  { nome: "Cabana", imagem: Hospedagem05, nota: 4.7, descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
  { nome: "Estacionamento-para-overlanders", imagem: Hospedagem06, nota: 4.6, descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..." }
];

const MainPaginaAcomodacoes = () => (
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
          <div className="Button-reserva">
            <Link to={`/Acomodacao/${acomodacao.nome}`}>
              <button className="btn-reserva">Fazer reserva</button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default MainPaginaAcomodacoes;
