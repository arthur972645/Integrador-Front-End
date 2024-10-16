import React from "react";
import ICONBebida from "./ICON-BEBIDA.svg";
import group2 from "./group-2.png";
import group from "./group.png";
import image2 from "./image-2.png";
import image3 from "./image-3.png";
import image4 from "./image-4.png";
import image from "./image.png";
import image1 from "./image.svg";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector from "./vector.svg";

export const Hospedagem = () => {
  return (
    <div className="PAGE">
      <div className="text-wrapper">Lorem Ipsum</div>
      <div className="IMG-RESERVA">
        <img className="image" alt="Image" src={image} />
        <div className="COLUN-IMG-RESERVA">
          <img className="img" alt="Image" src={image2} />
          <img className="image-2" alt="Image" src={image3} />
          <img className="img" alt="Image" src={image4} />
        </div>
      </div>
      <div className="BODY">
        <div className="INFORMAES">
          <div className="DESCRIO">
            <div className="div">Lorem Ipsum</div>
            <div className="frame">
              <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,.</p>
              <div className="PONTOS-COMENTS">
                <div className="PONTUAO">
                  <img className="vector" alt="Vector" src={vector} />
                  <div className="text-wrapper-2">4.5</div>
                </div>
                <img className="vector-2" alt="Vector" src={image1} />
                <div className="text-wrapper-3">91 comentários</div>
              </div>
            </div>
          </div>
          <div className="o-QUE-OFERECE">
            <p className="text-wrapper-4">O que o quarto oferece?</p>
            <div className="COZINHA-WIFI">
              <div className="div-2">
                <img className="group" alt="Group" src={group} />
                <div className="text-wrapper-5">Wi-Fi rápido (86 Mbps)</div>
              </div>
              <div className="div-2">
                <img className="vector-3" alt="Vector" src={vector2} />
                <div className="text-wrapper-6">Cozinha</div>
              </div>
            </div>
            <div className="PATIO">
              <img className="group-2" alt="Group" src={group2} />
              <div className="text-wrapper-5">Vista para o pátio</div>
            </div>
            <div className="FRIGOBAR">
              <img className="ICON-BEBIDA" alt="Icon BEBIDA" src={ICONBebida} />
              <div className="text-wrapper-7">Frigobar</div>
            </div>
          </div>
        </div>
        <div className="BOX-RESERVA">
          <div className="frame-2">
            <div className="VALOR">
              <div className="text-wrapper-8">R$590</div>
              <div className="text-wrapper-9">Por noite</div>
            </div>
            <div className="div-3">
              <div className="CHECK-IN">
                <div className="text-wrapper-10">CHECK-IN</div>
                <div className="text-wrapper-11">29/09/2024</div>
              </div>
              <div className="CHECK-OUT">
                <div className="text-wrapper-10">CHECK-OUT</div>
                <div className="text-wrapper-11">29/09/2024</div>
              </div>
            </div>
            <div className="BOX-SELEO-HOSPEDES">
              <div className="SELECIONAR-HOSPEDES">
                <div className="HOSPEDES">
                  <div className="h-SPEDES">HÓSPEDES</div>
                  <div className="element-h-SPEDES">1&nbsp;&nbsp;hóspedes</div>
                </div>
                <img className="vector-4" alt="Vector" src={vector3} />
              </div>
            </div>
            <div className="fazer-reserva-wrapper">
              <div className="fazer-reserva">FAZER RESERVA</div>
            </div>
          </div>
          <div className="div-3">
            <div className="text-wrapper-12">Noite(s) x 2</div>
            <div className="text-wrapper-13">R$1.180</div>
          </div>
          <div className="VALOR-TOTAL">
            <div className="text-wrapper-12">Total</div>
            <div className="text-wrapper-14">R$1.180</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hospedagem 