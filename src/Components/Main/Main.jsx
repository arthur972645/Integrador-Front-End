import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward,  IoIosStar  } from "react-icons/io";
import Hospedagem01 from "../../Image/Hospedagem01.png";
import Hospedagem02 from "../../Image/Hospedagem02.png";
import Hospedagem03 from "../../Image/Hospedagem03.png";
import Hospedagem04 from "../../Image/Hospedagem04.png"
import Hospedagem05 from "../../Image/Hospedagem05.png"
import Hospedagem06 from "../../Image/Hospedagem06.png"
import imagem_perfil_01 from "../../Image/imagem_perfil_01.png";
import imagem_perfil_02 from "../../Image/imagem_perfil_02.png";
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
      setCurrentIndex(currentIndex + 0.4);
      setIsNextClicked(true);  
      setIsPrevClicked(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 0.4);
      setIsPrevClicked(true);  
      setIsNextClicked(false); 
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
                    <div className="Sessao-mensagem1"> 
                      <img src={imagem_perfil_01} alt="imagem de perfil do usuario" className="Imagem-perfil" />
                       <section className="Comentario">
                          <div className="nomo_do_cliente"> 
                            <p>John</p>
                            <div>
                               <p> 
                                  4,5 <IoIosStar className="Icon-estrela-comentario"/>
                              </p>
                            </div>
                
                          </div>
                          
                          <p>Lorem ipsum dolor sit amet. Et deserunt impedit ut omnis accusantium ea deserunt eius. </p>
                          
                       </section>
                    </div>
                    <div className="Sessao-mensagem2">
                      <img src={imagem_perfil_02} alt="" className="Imagem-perfil" />
                      <section className="Comentario">
                          <div className="nomo_do_cliente"> 
                            <p>Vitória</p>
                            <div>
                               <p> 
                                 5,0 <IoIosStar className="Icon-estrela-comentario"/>
                              </p>
                            </div>
                
                          </div>
                          
                          <p>Lorem ipsum dolor sit amet. Et deserunt impedit ut omnis accusantium ea deserunt eius. </p>
                          
                       </section>
                    </div>
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
              <p className="Hospedagens-titulo">Hospedagens Populares</p>
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
