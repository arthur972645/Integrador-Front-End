import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import Hospedagem01 from "../../Image/Hospedagem01.png";
import Hospedagem02 from "../../Image/Hospedagem02.png";
import Hospedagem03 from "../../Image/Hospedagem03.png";
import Hospedagem04 from "../../Image/Hospedagem04.png"
import Hospedagem05 from "../../Image/Hospedagem05.png"
import Hospedagem06 from "../../Image/Hospedagem06.png"
import './Main.css';

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isPrevClicked, setIsPrevClicked] = useState(false);

  const hospedagens = [
    { src: Hospedagem01, title: 'Domo', beds: '1 de casal', rating: 4.5 },
    { src: Hospedagem02, title: 'Charrua (Bus)', beds: '1 de casal', rating: 4.5 },
    { src: Hospedagem03, title: 'Chalé família', beds: '1 de casal', rating: 4.5 },
    { src: Hospedagem04, title: 'Suíte com cozinha', beds: '1 de casal', rating: 4.5 },
    { src: Hospedagem05, title: 'Cabana', beds: '1 de casal', rating: 4.5 },
    { src: Hospedagem06, title: 'Estacionamento para overlanders', beds: '1 de casal', rating: 4.5 }
  ];

  const handleNext = () => {
    if (currentIndex < hospedagens.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsNextClicked(true);  // Marcar que o botão "btn-prosseguir" foi clicado
      setIsPrevClicked(false); // Resetar o estado de "btn-voltar"
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsPrevClicked(true);  // Marcar que o botão "btn-voltar" foi clicado
      setIsNextClicked(false); // Resetar o estado de "btn-prosseguir"
    }
  };

  return (
    <>
      <section className="Main">
        <section className="Sessao-Imagem">
          <div className="Imagem">
            <div className="Info-imagem">
              <div className="Textos-Imagem">
                <div className="texto1">Descanse com Estilo</div>
                <div className="texto2">Sua Melhor Experiência de Hotel Começa Aqui!</div>
                <div className="Btns-Imagem">
                  <div className="Btn-imagem-reservar">
                    <button className="Button-animado">Reserve sua Estadia</button>
                  </div>
                  <div className="Btn-imagem-localizacao">
                    <FaLocationDot onClick={() => window.open('https://www.google.com/maps?q=-28.5399126,-48.7780686', '_blank')} className="Icon-localizacao" />
                  </div>
                </div>
              </div>
              <div className="Sessao-mensagem-fedeabck">
                  <div className="box-mensagem-fedeabck1">
                      {/* <h1>FAZER A INTERAÇÃO COM A API TERÇA(HOJE)</h1> */}
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Redes-Sociais">
          <div className="Box-redeSocial">
              <p>Siga: </p>
            <IoLogoInstagram onClick={() => window.open('#')} className="Icon-instagram" />
            <SlSocialFacebook onClick={() => window.open('#')} className="Icon-facebook" />
            <FaWhatsapp onClick={() => window.open('#')} className="Icon-zap"/>
          </div>
        </section>    

        <section className="Hospoedagens-populares">
          <div className="Texto-Btn">
            <div className="Texto-Hospedagens">
              <p>Hospedagens Populares</p>
            </div>
            <div className="Btn-Hospedagens">
              <div
                className={`Btn-voltar ${isNextClicked ? 'escuro' : ''}`}
                onClick={handlePrev}
              >
                <IoIosArrowBack />
              </div>
              <div
                className={`Btn-Prosseguir ${isPrevClicked ? 'escuro' : ''}`}
                onClick={handleNext}
              >
                <IoIosArrowForward />
              </div>
            </div>
          </div>

          <div className="Carrosel-hospedagens" style={{ transform: `translateX(-${currentIndex * 33.2}rem)` }}>
            {hospedagens.map((hospedagem, index) => (
              <div className="Hospedagem" key={index}>
                <img src={hospedagem.src} alt={`Hospedagem ${index + 1}`} />
                <div className="Descricao-Hospedagem01">
                  <div className="Descriao-detalhada">
                    <p className="Domo">{hospedagem.title}</p>
                    <p className="Camas">Camas: {hospedagem.beds}</p>
                  </div>
                  <div className="Classificacao">
                    <p>{hospedagem.rating}</p><IoIosStar className="Icon-estrela" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Main;
